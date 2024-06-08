import React from 'react';
import { Bar } from 'react-chartjs-2';
import { chartsData } from '../../data/dummyData';
const BarChart = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-white text-2xl font-semibold mb-4">Bar Chart</h2>
      <Bar data={chartsData.bar} />
    </div>
  );
};

export default BarChart;
