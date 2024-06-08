import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { chartsData } from '../../data/dummyData';

const ScatterChart = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-white text-2xl font-semibold mb-4">Scatter Chart</h2>
      <Scatter data={chartsData.scatter} />
    </div>
  );
};

export default ScatterChart;
