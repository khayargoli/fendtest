import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
);

const BalanceHistory = () => {


  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.ctx;
      const gradientFill = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradientFill.addColorStop(0, '#2D60FF80'); // 50% opacity
      gradientFill.addColorStop(1, '#2D60FF00'); // 0% opacity
      setGradient(gradientFill);
    }
  }, []);


  const data = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: '',
        data: [100, 350, 250, 770, 500, 200, 700],
        fill: true,
        borderColor: '#1814F3',
        backgroundColor: gradient || 'rgba(0, 0, 255, 0.2)',
        borderWidth: 3,
        tension: 0.6, // Increased for more curvature
        pointRadius: 0, // Add small points for reference
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 800,
        ticks: {
          stepSize: 200,
        },
        grid: {
          color: 'lightgray',
          borderDash: [5, 5],
        },
      },
      x: {
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    
    <div className="w-full max-h-[325px]">
      <div className="flex justify-between items-center mb-4">
        <label className="font-semibold text-[22px]">Expense Statistics</label>
      </div>
      <div className="bg-white rounded-[40px] shadow h-[275px] p-6">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceHistory;