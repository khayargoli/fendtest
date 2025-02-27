// components/ExpenseStatistics.jsx
import { useEffect, useRef } from 'react'

const ExpenseStatistics = () => {
  const chartRef = useRef(null)
  
  // This would typically be fetched from an API
  const expenseData = [
    { category: 'Entertainment', percentage: 30, color: '#3A4374' },
    { category: 'Bill Expense', percentage: 15, color: '#F97316' },
    { category: 'Investment', percentage: 20, color: '#4169E1' },
    { category: 'Others', percentage: 35, color: '#1F2937' }
  ]
  
  // In a real application, you would use a charting library like Chart.js or D3.js
  // Here we're creating a simplified representation
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-bold text-lg mb-6">Expense Statistics</h3>
      
      <div className="flex justify-center items-center">
        <div className="w-48 h-48 relative" ref={chartRef}>
          {/* This is a simple placeholder for the pie chart */}
          <div className="w-full h-full rounded-full overflow-hidden relative">
            {expenseData.map((item, index) => {
              let rotation = 0
              for (let i = 0; i < index; i++) {
                rotation += expenseData[i].percentage * 3.6
              }
              
              return (
                <div
                  key={item.category}
                  className="absolute inset-0"
                  style={{
                    background: item.color,
                    clipPath: `conic-gradient(from ${rotation}deg, ${item.color} 0deg, ${item.color} ${item.percentage * 3.6}deg, transparent ${item.percentage * 3.6}deg)`,
                  }}
                ></div>
              )
            })}
          </div>
        </div>
        
        <div className="ml-6 space-y-3">
          {expenseData.map((item) => (
            <div key={item.category} className="flex items-center">
              <div 
                className="w-4 h-4 rounded-sm mr-2" 
                style={{ backgroundColor: item.color }}
              ></div>
              <div>
                <p className="text-sm font-medium">{item.percentage}%</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExpenseStatistics