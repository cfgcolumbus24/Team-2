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

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function FinancialPage() {
  const [data, setData] = useState([]);
  const revenueChartRef = useRef(null);
  const expenseChartRef = useRef(null);

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

  const revenueLabels = data.map((item) => item['Revenue Source']);
  const expenseLabels = data.map((item) => item['Expense Category']).filter(Boolean);

  const revenue2020 = data.map((item) => parseFloat(item['2020']) || 0);
  const revenue2021 = data.map((item) => parseFloat(item['2021']) || 0);
  const revenue2022 = data.map((item) => parseFloat(item['2022']) || 0);

  const expenses2022 = data.map((item) => parseFloat(item['2022 Expenses']) || 0).filter((value) => !isNaN(value));

  const revenueData = {
    labels: revenueLabels,
    datasets: [
      { label: '2020 Revenue', data: revenue2020, backgroundColor: 'rgba(75, 192, 192, 0.6)' },
      { label: '2021 Revenue', data: revenue2021, backgroundColor: 'rgba(153, 102, 255, 0.6)' },
      { label: '2022 Revenue', data: revenue2022, backgroundColor: 'rgba(255, 159, 64, 0.6)' },
    ],
  };

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

  const generateReport = async () => {
    const doc = new jsPDF("p", "pt", "a4");

    doc.setFontSize(18);
    doc.text("2022 Financial Overview", 40, 40);

    const revenueRows = data.slice(0, 9).map((item) => [
      item['Revenue Source'],
      `$${item['2020']}`,
      `$${item['2021']}`,
      `$${item['2022']}`
    ]);

    const expenseRows = data.slice(0, 5).map((item) => [
      item['Expense Category'],
      `$${item['2020 Expenses']}`,
      `$${item['2021 Expenses']}`,
      `$${item['2022 Expenses']}`
    ]);

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

    const totalStartY = doc.autoTable.previous.finalY + 20;
    doc.setFontSize(12);
    doc.text(`Total Revenue (2022): $${data[8]?.['2022']}`, 40, totalStartY + 20);
    doc.text(`Total Expenses (2022): $${data[4]?.['2022 Expenses']}`, 40, totalStartY + 40);

    doc.addPage();
    doc.setFontSize(18);
    doc.text("2022 Financial Overview - Charts", 40, 40);

    const revenueCanvas = await html2canvas(revenueChartRef.current);
    const revenueImage = revenueCanvas.toDataURL("image/png");
    const revenueWidth = 500;
    const revenueAspectRatio = revenueCanvas.width / revenueCanvas.height;
    const revenueHeight = revenueWidth / revenueAspectRatio;
    doc.addImage(revenueImage, "PNG", 40, 80, revenueWidth, revenueHeight);

    const expenseCanvas = await html2canvas(expenseChartRef.current);
    const expenseImage = expenseCanvas.toDataURL("image/png");
    const expenseWidth = 500;
    const expenseAspectRatio = expenseCanvas.width / expenseCanvas.height;
    const expenseHeight = expenseWidth / expenseAspectRatio;
    doc.addImage(expenseImage, "PNG", 40, 480, expenseWidth, expenseHeight);

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

      <section>
        <h2 className={styles.chartSection}>Revenue Comparison by Year</h2>
        <div ref={revenueChartRef} className={styles.chartContainer}>
          <Bar data={revenueData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 className={styles.chartSection}>2022 Expenses Distribution</h2>
        <div ref={expenseChartRef} className={styles.chartContainer}>
          <Pie data={expenseData2022} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      <button onClick={generateReport} className={styles.generateReportButton}>
        Generate Report
      </button>
    </div>
  );
}




