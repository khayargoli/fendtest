import { useState } from 'react'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-[30px] h-[100px]">
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="w-5 h-5 bg-gray-300 rounded"></div> {/* Search icon placeholder */}
            </div>
            <input
              type="text"
              placeholder="Search for something"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <div className="w-6 h-6 bg-gray-300 rounded"></div> {/* Settings icon placeholder */}
          </button>
          
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <div className="w-6 h-6 bg-gray-300 rounded"></div> {/* Notification icon placeholder */}
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div> {/* Avatar placeholder */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header