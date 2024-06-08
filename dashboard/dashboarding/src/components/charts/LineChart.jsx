import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartsData } from '../../data/dummyData';

const LineChart = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-white text-2xl font-semibold mb-4">Line Chart</h2>
      <Line data={chartsData.line} />
    </div>
  );
};

export default LineChart;
