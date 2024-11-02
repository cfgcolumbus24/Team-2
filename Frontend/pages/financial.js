import React, { useEffect, useState, useRef } from 'react';
import Papa from 'papaparse';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function FinancialPage() {
  const [data, setData] = useState(null);
  const revenueChartRef = useRef(null);
  const expenseChartRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/financial-data'); //Fetch from API route
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);
  

  if (!data) return <p>Loading data...</p>;

  //Extract revenue and expense data from csv
  const revenueLabels = data.map((item) => item['Revenue Source']);
  const expenseLabels = data.map((item) => item['Expense Category']).filter(Boolean);

  const revenue2020 = data.map((item) => parseFloat(item['2020']) || 0);
  const revenue2021 = data.map((item) => parseFloat(item['2021']) || 0);
  const revenue2022 = data.map((item) => parseFloat(item['2022']) || 0);

  const expenses2022 = data.map((item) => parseFloat(item['2022 Expenses']) || 0).filter((value) => !isNaN(value));

  //Bar chart data for revenue comparison across years
  const revenueData = {
    labels: revenueLabels,
    datasets: [
      { label: '2020 Revenue', data: revenue2020, backgroundColor: 'rgba(75, 192, 192, 0.6)' },
      { label: '2021 Revenue', data: revenue2021, backgroundColor: 'rgba(153, 102, 255, 0.6)' },
      { label: '2022 Revenue', data: revenue2022, backgroundColor: 'rgba(255, 159, 64, 0.6)' },
    ],
  };

  //Pie chart data for 2022 expenses
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

    //First Page - Table of Financial Data
    doc.setFontSize(18);
    doc.text("2022 Financial Overview", 40, 40);

    //Table data for Revenue and Expenses
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

    //AutoTable for Revenue
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

    //AutoTable for Expenses
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

    //Add Total Revenue and Total Expenses
    const totalStartY = doc.autoTable.previous.finalY + 20;
    doc.setFontSize(12);
    doc.text(`Total Revenue (2022): $${data[8]['2022']}`, 40, totalStartY + 20);
    doc.text(`Total Expenses (2022): $${data[4]['2022 Expenses']}`, 40, totalStartY + 40);

    //Second Page - Charts
    doc.addPage();

    doc.setFontSize(18);
    doc.text("2022 Financial Overview - Charts", 40, 40);

    //Capture and add revenue chart
    const revenueCanvas = await html2canvas(revenueChartRef.current);
    const revenueImage = revenueCanvas.toDataURL("image/png");
    doc.addImage(revenueImage, "PNG", 40, 80, 500, 250);

    //Capture and add expense chart
    const expenseCanvas = await html2canvas(expenseChartRef.current);
    const expenseImage = expenseCanvas.toDataURL("image/png");
    doc.addImage(expenseImage, "PNG", 40, 360, 500, 250);

    //Save the PDF
    doc.save("financial_report_2022.pdf");
  };

  return (
    <div>
      <h1>Financial Dashboard</h1>

      <section>
        <h2>Revenue Comparison by Year</h2>
        <div ref={revenueChartRef} style={{ maxWidth: '600px', height: '400px', margin: 'auto' }}>
          <Bar data={revenueData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>2022 Expenses Distribution</h2>
        <div ref={expenseChartRef} style={{ maxWidth: '600px', height: '400px', margin: 'auto' }}>
          <Pie data={expenseData2022} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      <button onClick={generateReport} style={{ marginTop: '2rem', padding: '10px 20px' }}>
        Generate Report
      </button>
    </div>
  );
}