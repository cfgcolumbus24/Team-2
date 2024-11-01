import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
import jsPDF from 'jspdf';

//Register Chart.js components
ChartJS.register(LineElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

//Sample data for budget and expenses
const budgetData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Budget Allocation',
      data: [5000, 10000, 7500, 15000, 12000, 8000],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
    },
  ],
};

const expenseData = {
  labels: ['Salaries', 'Office Supplies', 'Utilities', 'Equipment', 'Miscellaneous'],
  datasets: [
    {
      data: [30000, 5000, 2000, 10000, 3000],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    },
  ],
};

//Function to generate PDF report
const generateReport = () => {
  const doc = new jsPDF();
  doc.text('Financial Budget Report', 10, 10);
  doc.text('Report Generated Automatically', 10, 20);
  doc.save('budget_report.pdf');
};

export default function FinancialPage() {
  return (
    <div>
      <h1>Financial Dashboard</h1>
      <div style={{ maxWidth: '600px', margin: 'auto' }}>
        <h2>Monthly Budget Allocation</h2>
        <Line data={budgetData} />
      </div>
      <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '2rem' }}>
        <h2>Expense Breakdown</h2>
        <Pie data={expenseData} />
      </div>
      <button onClick={generateReport} style={{ marginTop: '2rem', padding: '10px 20px' }}>
        Generate Report
      </button>
    </div>
  );
}
