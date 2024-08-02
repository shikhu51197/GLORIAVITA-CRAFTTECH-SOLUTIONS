// components/Barchart.jsx
import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

const data = {
  labels: ['5', '9', '11', '13', '15', '17', '19', '21'],
  datasets: [
    {
      label: 'Activity',
      data: [5000, 10000, 7500, 12000, 15000, 10000, 8000, 13000],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ActivityChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Register required components
    Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

    // Create the chart instance
    if (chartRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'bar',
        data: data,
        options: options,
      });
    }

    // Cleanup function to destroy chart instance
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default ActivityChart;
