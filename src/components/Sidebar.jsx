import { NavLink } from "react-router-dom";
import mainLogo from "../assets/logo.svg";

const Sidebar = () => {
  const navItems = [
    { id: 1, name: "Dashboard", path: "/", icon: "home" },
    { id: 2, name: "Transactions", path: "/transactions", icon: "transfer" },
    { id: 3, name: "Accounts", path: "/accounts", icon: "user" },
    { id: 4, name: "Investments", path: "/investments", icon: "economics" },
    { id: 5, name: "Credit Cards", path: "/credit-cards", icon: "creditcard" },
    { id: 6, name: "Loans", path: "/loans", icon: "loan" },
    { id: 7, name: "Services", path: "/services", icon: "service" },
    { id: 8, name: "My Privileges", path: "/privileges", icon: "economics" },
    { id: 9, name: "Setting", path: "/settings", icon: "settings" },
  ];

  return (
    <div className="w-[250px] bg-white border-r border-gray-200">
      <div className="flex items-center mb-6 h-[100px] pl-[40px]">
        <div className="h-8 w-8 mr-2">
          <img src={mainLogo} />
        </div>
        <h1 className="text-xl font-bold text-primary">Soar Task</h1>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex pl-[40px] items-center px-4 py-3 text-gray-600 rounded-lg transition-colors ${
                isActive ? " text-black-500 font-medium" : "hover:bg-gray-50"
              }`
            }
          >
            <div className="w-6 h-6 rounded mr-6">
              <img
                key={item.name}
                src={`/icons/${item.icon}.svg`}
                alt={item.icon}
                width={50}
                height={50}
              />
            </div>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
