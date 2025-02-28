import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import LoadingComponent from "./LoadingComponent";
import { useTransactionChartData } from '../hooks/useTransactionChartData';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WeeklyActivity = () => {
  const { withdrawData, depositData, loading, error } = useTransactionChartData();
  const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Withdraw",
        data: withdrawData,
        backgroundColor: "#232323",
        borderRadius: 25,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
      {
        label: "Deposit",
        data: depositData,
        backgroundColor: "#396AFF",
        borderRadius: 25,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          color: "#000",
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#718EBF" },
        stacked: false,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: { color: "#718EBF", stepSize: 100 },
        beginAtZero: true,
        min: 0,
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="w-full max-h-[370px]">
      <div className="flex justify-between items-center mb-4">
        <label className="font-semibold text-[22px]">Weekly Activity</label>
      </div>
      <div className="bg-white rounded-[40px] p-6 h-[325px]">
        {loading ? (
          <LoadingComponent />
        ) : error ? (
          <div>Error: {error.message || 'Failed to fetch chart data'}</div>
        ) : (
          <Bar data={data} options={options} />
        )}
      </div>
    </div>
  );
};

export default WeeklyActivity;