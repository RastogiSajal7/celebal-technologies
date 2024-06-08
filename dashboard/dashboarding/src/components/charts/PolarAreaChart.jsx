import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { chartsData } from '../../data/dummyData';

const PolarAreaChart = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex justify-center items-center w-full">
    <div className="w-full max-w-4xl">
      <h2 className="text-white text-2xl font-semibold mb-4 text-center">Polar Area Chart</h2>
      <div className="relative" style={{ height: '500px' }}>
        <PolarArea data={chartsData.polarArea} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  </div>
);
};

export default PolarAreaChart;
