import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
import jsPDF from 'jspdf';

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function FinancialPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //Fetch and parse the CSV data
    async function fetchData() {
      const response = await fetch('/netcare_financial_data.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, { header: true });
      setData(parsedData.data);
    }
    fetchData();
  }, []);

  if (!data) return <p>Loading data...</p>;

  // Extract revenue and expense data
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

  return (
    <div>
      <h1>Financial Dashboard</h1>

      <section>
        <h2>Revenue Comparison by Year</h2>
        <div style={{ maxWidth: '600px', height: '400px', margin: 'auto' }}>
          <Bar data={revenueData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>2022 Expenses Distribution</h2>
        <div style={{ maxWidth: '600px', height: '400px', margin: 'auto' }}>
          <Pie data={expenseData2022} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>
    </div>
  );
}