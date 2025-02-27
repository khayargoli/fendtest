import { useEffect, useRef } from 'react'

const WeeklyActivity = () => {
  const chartRef = useRef(null)
  
  // This would typically be fetched from an API
  const activityData = {
    days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    deposits: [220, 130, 240, 350, 210, 230, 250],
    withdrawals: [450, 300, 350, 450, 160, 350, 330]
  }
  
  // In a real application, you would use a charting library like Chart.js or D3.js
  // Here we're just creating a basic visual representation
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-bold text-lg mb-6">Weekly Activity</h3>
      
      <div className="flex justify-end space-x-6 mb-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm text-gray-600">Deposit</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-800 mr-2"></div>
          <span className="text-sm text-gray-600">Withdraw</span>
        </div>
      </div>
      
      <div className="relative h-64" ref={chartRef}>
        <div className="absolute left-0 bottom-0 w-full h-full border-t border-gray-100">
          {/* Y-axis labels */}
          <div className="absolute -left-10 bottom-0 h-full flex flex-col justify-between text-xs text-gray-400">
            <span>500</span>
            <span>400</span>
            <span>300</span>
            <span>200</span>
            <span>100</span>
            <span>0</span>
          </div>
          
          {/* Chart bars */}
          <div className="absolute left-0 bottom-0 w-full h-full flex justify-between items-end px-2">
            {activityData.days.map((day, index) => (
              <div key={day} className="flex flex-col items-center space-y-2 w-1/7">
                {/* Withdrawal bar */}
                <div 
                  className="w-4 bg-gray-800 rounded-sm" 
                  style={{ height: `${(activityData.withdrawals[index] / 500) * 100}%` }}
                ></div>
                
                {/* Deposit bar */}
                <div 
                  className="w-4 bg-blue-500 rounded-sm" 
                  style={{ height: `${(activityData.deposits[index] / 500) * 100}%` }}
                ></div>
                
                {/* Day label */}
                <span className="text-xs text-gray-500 mt-2">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyActivity