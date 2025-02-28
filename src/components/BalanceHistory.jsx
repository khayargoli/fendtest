import React, { useState, useRef, useEffect } from 'react';
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

import { useBalanceHistoryData } from '../hooks/useBalanceHistoryData';
import LoadingComponent from './LoadingComponent';

const BalanceHistory = () => {
    const chartRef = useRef(null);
    const [gradient, setGradient] = useState(null);
    const { labels, chartData, loading, error } = useBalanceHistoryData();

    useEffect(() => {
        if (chartRef.current && chartRef.current.chart) {
            const ctx = chartRef.current.chart.ctx;
            const gradientFill = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            gradientFill.addColorStop(0, '#2D60FF80');
            gradientFill.addColorStop(1, '#2D60FF00');
            setGradient(gradientFill);
        }
    }, []);

    const data = {
        labels: labels,
        datasets: [
            {
                label: '',
                data: chartData,
                fill: true,
                borderColor: '#1814F3',
                backgroundColor: gradient || 'rgba(0, 0, 255, 0.2)',
                borderWidth: 3,
                tension: 0.6,
                pointRadius: 0,
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
        onComplete: () => {
            if (chartRef.current && chartRef.current.chart) {
                const ctx = chartRef.current.chart.ctx;
                const gradientFill = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
                gradientFill.addColorStop(0, '#2D60FF80');
                gradientFill.addColorStop(1, '#2D60FF00');
                setGradient(gradientFill);
            }
        }
    };

    return (
        <div className="w-full max-h-[325px]">
            <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-[22px]">Balance History</label>
            </div>
            <div className="bg-white rounded-[40px]  h-[275px] p-2 md:p-6">
                {loading ? (
                    <LoadingComponent />
                ) : error ? (
                    <div>Error: {error.message || 'Failed to fetch data'}</div>
                ) : (
                    <Line ref={chartRef} data={data} options={options} />
                )}
            </div>
        </div>
    );
};

export default BalanceHistory;