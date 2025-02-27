import { useEffect, useRef } from 'react'

const BalanceHistory = () => {
  const chartRef = useRef(null)
  
  // This would typically be fetched from an API
  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']
  const balanceData = [150, 320, 270, 470, 270, 570, 370]
  
  // In a real application, you would use a charting library like Chart.js or D3.js
  // Here we're creating a simplified representation
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-bold text-lg mb-6">Balance History</h3>
      
      <div className="relative h-48" ref={chartRef}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
          <span>800</span>
          <span>600</span>
          <span>400</span>
          <span>200</span>
          <span>0</span>
        </div>
        
        <div className="absolute left-10 right-0 top-0 bottom-0">
          {/* Chart line representation - in a real app you'd use SVG */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-blue-50 rounded-lg"></div>
            
            {/* Simple line representation */}
            <div className="absolute inset-0 flex items-end">
              <svg className="w-full h-full" viewBox={`0 0 ${months.length * 100} 100`} preserveAspectRatio="none">
                <path
                  d={`M0,${100 - (balanceData[0] / 800) * 100} ${months.map((_, i) => 
                    `L${(i + 1) * 100},${100 - (balanceData[i + 1 < balanceData.length ? i + 1 : i] / 800) * 100}`
                  ).join(' ')}`}
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                />
              </svg>
            </div>
            
            {/* X-axis labels */}
            <div className="absolute -bottom-6 left-0 w-full flex justify-between text-xs text-gray-400">
              {months.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalanceHistory