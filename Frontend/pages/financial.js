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

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function FinancialPage() {
  const [data, setData] = useState([]); // Initialize as an empty array
  const revenueChartRef = useRef(null);
  const expenseChartRef = useRef(null);

  // Fetch JSON data directly from the public folder
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/netcare_financial_data.json'); // Fetch directly from public folder
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

  const revenue2020 = data.map((item) => parseFloat(item['2020']) || 0);
  const revenue2021 = data.map((item) => parseFloat(item['2021']) || 0);
  const revenue2022 = data.map((item) => parseFloat(item['2022']) || 0);

  const expenses2022 = data.map((item) => parseFloat(item['2022 Expenses']) || 0).filter((value) => !isNaN(value));

  // Bar chart data for revenue comparison across years
  const revenueData = {
    labels: revenueLabels,
    datasets: [
      { label: '2020 Revenue', data: revenue2020, backgroundColor: 'rgba(75, 192, 192, 0.6)' },
      { label: '2021 Revenue', data: revenue2021, backgroundColor: 'rgba(153, 102, 255, 0.6)' },
      { label: '2022 Revenue', data: revenue2022, backgroundColor: 'rgba(255, 159, 64, 0.6)' },
    ],
  };

  // Pie chart data for 2022 expenses
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

    // Add Total Revenue and Total Expenses
    const totalStartY = doc.autoTable.previous.finalY + 20;
    doc.setFontSize(12);
    doc.text(`Total Revenue (2022): $${data[8]?.['2022']}`, 40, totalStartY + 20);
    doc.text(`Total Expenses (2022): $${data[4]?.['2022 Expenses']}`, 40, totalStartY + 40);

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

    // Save the PDF
    doc.save("financial_report_2022.pdf");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Financial Dashboard</h1>

      {/* Financial Summary */}
      <div style={{
        display: 'flex', justifyContent: 'space-around', marginTop: '20px', textAlign: 'center',
      }}>
        <div>
          <h3>Total Revenue (2022)</h3>
          <p style={{ fontSize: '1.2em', color: '#27ae60' }}>${data[8]?.['2022']}</p>
        </div>
        <div>
          <h3>Total Expenses (2022)</h3>
          <p style={{ fontSize: '1.2em', color: '#e74c3c' }}>${data[4]?.['2022 Expenses']}</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <section>
        <h2 style={{ textAlign: 'center', marginTop: '30px', color: '#34495e' }}>Revenue Comparison by Year</h2>
        <div ref={revenueChartRef} style={{ maxWidth: '600px', height: '400px', margin: 'auto' }}>
          <Bar data={revenueData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      {/* Expenses Chart */}
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ textAlign: 'center', color: '#34495e' }}>2022 Expenses Distribution</h2>
        <div ref={expenseChartRef} style={{ maxWidth: '600px', height: '400px', margin: 'auto' }}>
          <Pie data={expenseData2022} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      {/* Generate Report Button */}
      <button 
        onClick={generateReport} 
        style={{
          display: 'block', 
          margin: '2rem auto', 
          padding: '10px 20px', 
          fontSize: '1em', 
          backgroundColor: '#3498db',
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer'
        }}
      >
        Generate Report
      </button>
    </div>
  );
}



