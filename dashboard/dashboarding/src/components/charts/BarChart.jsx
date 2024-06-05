import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { lineChartData } from '../../data/dummyData.js';


const processData = (data) => {
  return data.map((series) => 
    series.map(point => ({
      x: point.x.getTime(), 
      y: point.y,
    }))
  );
};


const barColors = ['#8884d8', '#82ca9d', '#ff7300'];

const MyBarChart = () => {
  const processedData = processData(lineChartData);

  
  const combinedData = processedData[0].map((_, index) => {
    const item = { x: processedData[0][index].x };
    processedData.forEach((series, seriesIndex) => {
      item[`y${seriesIndex}`] = series[index].y;
    });
    return item;
  });

  return (
    <ResponsiveContainer width="100%" height={400} className="w-full overflow-x-auto">
      <BarChart data={combinedData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis 
          dataKey="x" 
          type="number" 
          domain={['dataMin', 'dataMax']}
          tickFormatter={(tick) => new Date(tick).getFullYear()}
        />
        <YAxis />
        <Tooltip 
          labelFormatter={(label) => new Date(label).toDateString()}
        />
        <Legend verticalAlign="top" height={36} />
        {processedData.map((_, index) => (
          <Bar
            key={index}
            dataKey={`y${index}`}
            fill={barColors[index % barColors.length]}
            name={`Series ${index + 1}`}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
