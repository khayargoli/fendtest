import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseStatistics = () => {
  const data = {
    labels: ['Investment', 'Entertainment', 'Bill Expense', 'Others'],
    datasets: [
      {
        data: [20, 30, 15, 35],
        backgroundColor: ['#4169E1', '#191970', '#FF8C00', '#000000'],
        borderWidth: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#000",
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: ${value}%`;
          },
        },
      },
    },
    layout: {
      padding: 20,
    },
    cutout: '0%', // Make the pie chart a full circle
  };

  return (

    <div className="w-full max-h-[370px]">
      <div className="flex justify-between items-center mb-4">
        <label className="font-semibold text-[22px]">Expense Statistics</label>
      </div>
      <div className="bg-white rounded-[40px] shadow flex justify-center h-[325px]">
        <Pie data={data} options={options} />
      </div>
    </div>

  );
};

export default ExpenseStatistics;