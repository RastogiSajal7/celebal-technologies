import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { chartsData } from '../../data/dummyData';

const BubbleChart = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-white text-2xl font-semibold mb-4">Bubble Chart</h2>
      <Bubble data={chartsData.bubble} />
    </div>
  );
};

export default BubbleChart;
