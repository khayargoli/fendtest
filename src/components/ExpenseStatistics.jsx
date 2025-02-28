import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { useExpenseData } from '../hooks/useExpenseData'
import LoadingComponent from './LoadingComponent';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseStatistics = () => {
    const { expenseData, loading, error } = useExpenseData();

    const data = {
        labels: ['Investment', 'Entertainment', 'Bill Expense', 'Others'],
        datasets: [
            {
                data: expenseData,
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
        cutout: '0%',
    };

    return (
        <div className="w-full max-h-[370px]">
            <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-[22px]">Expense Statistics</label>
            </div>
            <div className="bg-white rounded-[40px] flex justify-center h-[325px]">
                {loading ? (
                    <LoadingComponent />
                ) : error ? (
                    <div>Error: {error.message || 'Failed to fetch data'}</div>
                ) : (
                    <Pie data={data} options={options} />
                )}
            </div>
        </div>
    );
};

export default ExpenseStatistics;