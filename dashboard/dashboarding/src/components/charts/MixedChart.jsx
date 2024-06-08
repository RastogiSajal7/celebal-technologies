import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Chart as ChartJSComponent } from 'react-chartjs-2';

Chart.register(...registerables);

const MixedChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1 (line)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        fill: false,
        data: [50, 25, 12, 48, 56],
      },
      {
        type: 'bar',
        label: 'Dataset 2 (bar)',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [21, 31, 27, 14, 22],
        borderColor: 'white',
        borderWidth: 2,
      }
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      }
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-white text-2xl font-semibold mb-4">Mixed Chart</h2>
      <ChartJSComponent type='bar' data={data} options={options} />
    </div>
  );
};

export default MixedChart;
