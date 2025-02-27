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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: [450, 330, 310, 470, 110, 370, 380],
        backgroundColor: "#232323",
        borderRadius: 25,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },

      {
        label: "Deposit",
        data: [220, 110, 230, 340, 210, 220, 300],
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

  return <Bar data={data} options={options} />

};

export default BarChart;
