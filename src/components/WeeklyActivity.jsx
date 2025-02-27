import { useEffect, useRef } from 'react'
import BarChart from './BarChart'

const WeeklyActivity = () => {
  const chartRef = useRef(null)

  return (
    <div className="w-full max-h-[370px]">
      <div className="flex justify-between items-center mb-4">
        <label className="font-semibold text-[22px]">Weekly Activity</label>
      </div>
      <div className="bg-white rounded-[40px] shadow p-6 h-[325px]">
        <BarChart />
      </div>
    </div>
  )
}

export default WeeklyActivity