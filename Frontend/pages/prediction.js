import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Header from './dashboard/header';
import 'chart.js/auto';

const PredictionPage = () => {
    const [prompt, setPrompt] = useState('');
    const [chartData, setChartData] = useState(generateMockData());

    // Handler to generate mock data based on user prompt
    const handleGeneratePrediction = () => {
        // Simulate prediction generation based on prompt
        const newChartData = generateMockData(prompt);
        setChartData(newChartData);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
        <div style={{ padding: '20px' }}>
            <h1>Prediction Analysis</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter predictive prompt here"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    style={{ padding: '10px', width: '300px' }}
                />
                <button
                    onClick={handleGeneratePrediction}
                    style={{
                        marginLeft: '10px',
                        padding: '10px 15px',
                        backgroundColor: '#0070f3',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Generate Prediction
                </button>
            </div>
            <Line data={chartData} />
        </div>
    </div>
    );
};

// Helper function to generate mock data for the chart
function generateMockData(prompt = '') {
    const labels = Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`);
    const dataValues = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

    return {
        labels,
        datasets: [
            {
                label: `Prediction for "${prompt}"`,
                data: dataValues,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };
}

export default PredictionPage;
