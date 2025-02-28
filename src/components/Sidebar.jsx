import { NavLink } from "react-router-dom";
import mainLogo from "../assets/logo.svg";
import HomeIcon from "../assets/icons/home.svg?react";
import TransferIcon from "../assets/icons/transfer.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import EconomicsIcon from "../assets/icons/economics.svg?react";
import CreditCardIcon from "../assets/icons/creditcard.svg?react";
import LoanIcon from "../assets/icons/loan.svg?react";
import ServiceIcon from "../assets/icons/service.svg?react";
import InvestmentIcon from "../assets/icons/investment.svg?react";
import SettingsIcon from "../assets/icons/settings.svg?react";
import CloseIcon from "../assets/icons/close.svg?react";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  // Map icon names to their corresponding components
  const iconComponents = {
    home: HomeIcon,
    transfer: TransferIcon,
    user: UserIcon,
    economics: EconomicsIcon,
    creditcard: CreditCardIcon,
    loan: LoanIcon,
    service: ServiceIcon,
    investment: InvestmentIcon,
    settings: SettingsIcon,
  };

  const navItems = [
    { id: 1, name: "Dashboard", path: "/", icon: "home" },
    { id: 2, name: "Transactions", path: "", icon: "transfer" },
    { id: 3, name: "Accounts", path: "", icon: "user" },
    { id: 4, name: "Investments", path: "", icon: "investment" },
    { id: 5, name: "Credit Cards", path: "", icon: "creditcard" },
    { id: 6, name: "Loans", path: "", icon: "loan" },
    { id: 7, name: "Services", path: "", icon: "service" },
    { id: 8, name: "My Privileges", path: "", icon: "economics" },
    { id: 9, name: "Setting", path: "/settings", icon: "settings" },
  ];

  return (
    <>
      {/* Combined Sidebar for Desktop and Mobile */}
      <div
        className={`fixed lg:relative inset-y-0 left-0 z-50 w-full lg:w-[280px] bg-white shadow-xl lg:shadow-none transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 h-[100px] border-b border-gray-200">
          <div className="flex items-center">
            <div className="h-8 w-8 mr-2">
              <img src={mainLogo} alt="Logo" />
            </div>
            <h1 className="text-xl font-bold text-primary">Soar Task</h1>
          </div>

          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-100 lg:hidden"
          >
            <CloseIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1 p-4">
          {navItems.map((item) => {
            const IconComponent = iconComponents[item.icon];

            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => {
                  if (!item.path) return;
                  if (window.innerWidth < 1024) {
                    toggleSidebar();
                  }
                }}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-gray-600 rounded-lg transition-colors ${isActive ? "text-blackshade-500 font-medium" : "hover:bg-gray-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="w-6 h-6 rounded mr-6">
                      {IconComponent && (
                        <IconComponent
                          className="w-6 h-6"
                          fill={!isActive ? "#B1B1B1" : undefined}
                        />
                      )}
                    </div>
                    <span>{item.name}</span>
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>

      </div>

    </>
  );
};

export default Sidebar;