import { useState, useEffect } from 'react'
import SearchIcon from '../assets/headericons/search.svg?react'
import SettingsIcon from '../assets/headericons/settings.svg?react';
import BellIcon from '../assets/headericons/bell.svg?react';
import PersonIcon from '../assets/headericons/person.png';
import MenuIcon from '../assets/headericons/menu.svg?react';

const Header = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <header className="bg-white lg:border-b lg:border-[#E6EFF5] px-6 h-[140px] lg:h-[100px]">
        <div className="flex items-center justify-between h-full">
          <div className='lg:hidden block w-full'>
            <div className="flex-col items-center">
              <div className="flex  justify-between">
                <button
                  onClick={toggleSidebar}
                  className="mr-4 focus:outline-none"
                >
                  <MenuIcon className="w-6 h-6" />
                </button>
                <h2 className="text-xl font-bold text-gray-800">Overview</h2>
                <div className="w-10 h-10 rounded-full">
                  <img src={PersonIcon} className="rounded-full" alt="Profile" />
                </div>
              </div>

              <div className="relative  mt-[20px]">
                <div className="absolute inset-y-[-3px] left-3 flex items-center pointer-events-none">
                  <div className="w-4 h-4 "><SearchIcon /></div>
                </div>
                <input
                  type="text"
                  placeholder="Search for something"
                  className="pl-10 pr-4 py-2 h-[40px] rounded-[20px] bg-grayshade-500 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

          </div>

          <div className='lg:flex hidden  items-center justify-between w-full'>
          
            <h2 className="text-2xl font-bold text-gray-800">Overview</h2>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <div className="w-5 h-5"><SearchIcon /></div>
                </div>
                <input
                  type="text"
                  placeholder="Search for something"
                  className="pl-12 pr-4 h-[50px] rounded-[40px] bg-grayshade-500 w-[255px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <button className="rounded-full bg-grayshade-500">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded">
                  <SettingsIcon />
                </div>
              </button>

              <button className="rounded-full bg-grayshade-500">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded">
                  <BellIcon />
                </div>
              </button>

              <div className="flex items-center">
                <div className="w-[60px] h-[60px] rounded-full">
                  <img src={PersonIcon} className="rounded-full" alt="Profile" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

    </>
  )
}

export default Header