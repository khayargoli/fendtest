import CreditCard from '../components/CreditCard'
import WeeklyActivity from '../components/WeeklyActivity'
import ExpenseStatistics from '../components/ExpenseStatistics'
import QuickTransfer from '../components/QuickTransfer'
import BalanceHistory from '../components/BalanceHistory'
import RecentTransactions from '../components/RecentTransactions'

const Dashboard = () => {
  return (
    <div className="space-y-6 max-w-[1110px]">

      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">

        <div className="col-span-2 flex-col gap-x-[40px]">

          {/* My Cards Section */}
          <div className="flex items-center justify-between mb-4">
            <label className="font-semibold text-[22px]">My Cards</label>
            <a href="#" className="text-indigo-600 font-medium">See All</a>
          </div>

          <div className="col-span-2 flex gap-x-[30px]">
            <CreditCard
              type="dark"
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
            />
            <CreditCard
              type="light"
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
            />
          </div>
        </div>

        <div className="col-span-1">
          <RecentTransactions />
        </div>
      </div>

      {/* Charts and Activities Section */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
        <div className="col-span-2" >
          <WeeklyActivity />
        </div>
        <div className="col-span-1">
          <ExpenseStatistics />
        </div>
      </div>

      {/* Transfer and Balance History Section */}
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6">
        <div>
          <QuickTransfer />
        </div>
        <div>
          <BalanceHistory />
        </div>
      </div>
    </div>
  )
}

export default Dashboard