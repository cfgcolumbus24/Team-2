import React, { useEffect, useState, useRef } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';
import styles from '../styles/financial.module.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

export default function FinancialPage() {
  const [data, setData] = useState([]);
  const revenueChartRef = useRef(null);
  const expenseChartRef = useRef(null);
  const assetsChartRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/netcare_financial_data.json');
      const json = await response.json();

      if (Array.isArray(json)) {
        setData(json);
      } else {
        console.error("Data received is not an array:", json);
      }
    }
    fetchData();
  }, []);

  if (!Array.isArray(data) || data.length === 0) return <p>Loading data...</p>;

  // Extract data for charts
  const revenueLabels = data.map((item) => item['Revenue Source']);
  const expenseLabels = data.map((item) => item['Expense Category']).filter(Boolean);
  const assetsLabels = data.map((item) => item['Assets']).filter(Boolean);

  const revenue2020 = data.map((item) => parseFloat(item['2020']) || 0);
  const revenue2021 = data.map((item) => parseFloat(item['2021']) || 0);
  const revenue2022 = data.map((item) => parseFloat(item['2022']) || 0);

  const expenses2022 = data.map((item) => parseFloat(item['2022 Expenses']) || 0).filter((value) => !isNaN(value));
  const assets2020 = data.map((item) => parseFloat(item['2020 Assets']) || 0).filter((value) => !isNaN(value));
  const assets2021 = data.map((item) => parseFloat(item['2021 Assets']) || 0).filter((value) => !isNaN(value));
  const assets2022 = data.map((item) => parseFloat(item['2022 Assets']) || 0).filter((value) => !isNaN(value));

  // Bar chart data for revenue comparison across years
  const revenueData = {
    labels: revenueLabels,
    datasets: [
      { label: '2020 Revenue', data: revenue2020, backgroundColor: 'rgba(75, 192, 192, 0.6)' },
      { label: '2021 Revenue', data: revenue2021, backgroundColor: 'rgba(153, 102, 255, 0.6)' },
      { label: '2022 Revenue', data: revenue2022, backgroundColor: 'rgba(255, 159, 64, 0.6)' },
    ],
  };

  // Disable datalabels for revenue and assets charts
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false, // Hide datalabels on bar charts
      },
    },
  };

  // Pie chart data for 2022 expenses with percentage labels
const expenseData2022 = {
    labels: expenseLabels,
    datasets: [
      {
        label: '2022 Expenses',
        data: expenses2022,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };
  
  const expenseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const total = expenses2022.reduce((acc, value) => acc + value, 0);
            const value = tooltipItem.raw;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${tooltipItem.label}: $${value} (${percentage}%)`;
          },
        },
      },
      datalabels: {
        color: '#000',
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(1) + '%';
          return percentage;
        },
        anchor: 'end',
        align: 'start',
        offset: 10,
        backgroundColor: (context) => context.dataset.backgroundColor[context.dataIndex],
        padding: { top: 2, bottom: 2, left: 8, right: 8 }
      },
    },
  };
  

  // Bar chart data for assets comparison across years
  const assetsData = {
    labels: assetsLabels,
    datasets: [
      { label: '2020 Assets', data: assets2020, backgroundColor: 'rgba(255, 99, 132, 0.6)' },
      { label: '2021 Assets', data: assets2021, backgroundColor: 'rgba(54, 162, 235, 0.6)' },
      { label: '2022 Assets', data: assets2022, backgroundColor: 'rgba(255, 206, 86, 0.6)' },
    ],
  };

  const generateReport = async () => {
    const doc = new jsPDF("p", "pt", "a4");
  
    // First Page - Table of Financial Data
    doc.setFontSize(18);
    doc.text("2022 Financial Overview", 40, 40);
  
    // Revenue Table Data
    const revenueRows = data.slice(0, 9).map((item) => [
      item['Revenue Source'],
      `$${item['2020']}`,
      `$${item['2021']}`,
      `$${item['2022']}`
    ]);
  
    // Expense Table Data
    const expenseRows = data.slice(0, 5).map((item) => [
      item['Expense Category'],
      `$${item['2020 Expenses']}`,
      `$${item['2021 Expenses']}`,
      `$${item['2022 Expenses']}`
    ]);
  
    // Assets Table Data - Filter out rows with undefined or missing asset values
    const assetsRows = data
      .filter((item) => item['Assets'] && item['2020 Assets'] && item['2021 Assets'] && item['2022 Assets'])
      .map((item) => [
        item['Assets'],
        `$${item['2020 Assets']}`,
        `$${item['2021 Assets']}`,
        `$${item['2022 Assets']}`
      ]);
  
    // Add Revenue Table
    doc.setFontSize(14);
    doc.text("Revenue", 40, 70);
    autoTable(doc, {
      startY: 90,
      head: [['Source', '2020', '2021', '2022']],
      body: revenueRows,
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185] },
      margin: { left: 40, right: 40 },
    });
  
    // Add Expense Table
    const expenseStartY = doc.autoTable.previous.finalY + 20;
    doc.text("Expenses", 40, expenseStartY);
    autoTable(doc, {
      startY: expenseStartY + 20,
      head: [['Category', '2020', '2021', '2022']],
      body: expenseRows,
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185] },
      margin: { left: 40, right: 40 },
    });
  
    // Add Assets Table
    const assetsStartY = doc.autoTable.previous.finalY + 20;
    doc.text("Assets", 40, assetsStartY);
    autoTable(doc, {
      startY: assetsStartY + 20,
      head: [['Asset Type', '2020', '2021', '2022']],
      body: assetsRows,
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185] },
      margin: { left: 40, right: 40 },
    });
  
    // Second Page - Charts
    doc.addPage();
    doc.setFontSize(18);
    doc.text("2022 Financial Overview - Charts", 40, 40);
  
    // Capture and add revenue chart
    const revenueCanvas = await html2canvas(revenueChartRef.current);
    const revenueImage = revenueCanvas.toDataURL("image/png");
    const revenueWidth = 500;
    const revenueAspectRatio = revenueCanvas.width / revenueCanvas.height;
    const revenueHeight = revenueWidth / revenueAspectRatio;
    doc.addImage(revenueImage, "PNG", 40, 80, revenueWidth, revenueHeight);
  
    // Capture and add expense chart
    const expenseCanvas = await html2canvas(expenseChartRef.current);
    const expenseImage = expenseCanvas.toDataURL("image/png");
    const expenseWidth = 500;
    const expenseAspectRatio = expenseCanvas.width / expenseCanvas.height;
    const expenseHeight = expenseWidth / expenseAspectRatio;
    doc.addImage(expenseImage, "PNG", 40, 480, expenseWidth, expenseHeight);
  
    // Capture and add assets chart
    const assetsCanvas = await html2canvas(assetsChartRef.current);
    const assetsImage = assetsCanvas.toDataURL("image/png");
    const assetsWidth = 500;
    const assetsAspectRatio = assetsCanvas.width / assetsCanvas.height;
    const assetsHeight = assetsWidth / assetsAspectRatio;
    doc.addImage(assetsImage, "PNG", 40, 880, assetsWidth, assetsHeight);
  
    // Save the PDF
    doc.save("financial_report_2022.pdf");
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Financial Dashboard</h1>

      <div className={styles.summaryContainer}>
        <div>
          <h3>Total Revenue (2022)</h3>
          <p className={styles.revenueText}>${data[8]?.['2022']}</p>
        </div>
        <div>
          <h3>Total Expenses (2022)</h3>
          <p className={styles.expensesText}>${data[4]?.['2022 Expenses']}</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <section>
        <h2 className={styles.chartSection}>Revenue Comparison by Year</h2>
        <div ref={revenueChartRef} className={styles.chartContainer}>
          <Bar data={revenueData} options={barOptions} />
        </div>
      </section>

      {/* Expenses Chart */}
      <section style={{ marginTop: '2rem' }}>
        <h2 className={styles.chartSection}>2022 Expenses Distribution</h2>
        <div ref={expenseChartRef} className={styles.chartContainer}>
            <Pie data={expenseData2022} options={expenseOptions} />
        </div>
      </section>


      {/* Assets Chart */}
      <section style={{ marginTop: '2rem' }}>
        <h2 className={styles.chartSection}>Assets Comparison by Year</h2>
        <div ref={assetsChartRef} className={styles.chartContainer}>
          <Bar data={assetsData} options={barOptions} />
        </div>
      </section>

      {/* Generate Report Button */}
      <button onClick={generateReport} className={styles.generateReportButton}>
        Generate Report
      </button>
    </div>
  );
}



