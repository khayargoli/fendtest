import CreditCard from '../components/CreditCard'
import WeeklyActivity from '../components/WeeklyActivity'
import ExpenseStatistics from '../components/ExpenseStatistics'
import QuickTransfer from '../components/QuickTransfer'
import BalanceHistory from '../components/BalanceHistory'
import RecentTransactions from '../components/RecentTransactions'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* My Cards Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">My Cards</h2>
        <a href="#" className="text-indigo-600 font-medium">See All</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <CreditCard 
            type="dark"
            balance={5756}
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
        </div>
        <div className="col-span-1">
          <CreditCard 
            type="light"
            balance={5756}
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
        </div>
        <div className="col-span-1">
          <RecentTransactions />
        </div>
      </div>
      
      {/* Charts and Activities Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>
      
      {/* Transfer and Balance History Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </div>
  )
}

export default Dashboard