import CreditCard from '../components/CreditCard'
import WeeklyActivity from '../components/WeeklyActivity'
import ExpenseStatistics from '../components/ExpenseStatistics'
import QuickTransfer from '../components/QuickTransfer'
import BalanceHistory from '../components/BalanceHistory'
import RecentTransactions from '../components/RecentTransactions'
import CreditCardList from '../components/CreditCardList'

const Dashboard = () => {


  return (
    <div className="space-y-6 max-w-[1110px] m-auto">

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-y-6 md:gap-6">

        <div className="col-span-2 flex-col gap-x-[40px]">
          <CreditCardList />
        </div>

        <div className="col-span-1">
          <RecentTransactions />
        </div>
      </div>

      {/* Charts and Activities Section */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-y-6 md:gap-6">
        <div className="col-span-2" >
          <WeeklyActivity />
        </div>
        <div className="col-span-1">
          <ExpenseStatistics />
        </div>
      </div>

      {/* Transfer and Balance History Section */}
      <div className="flex flex-col lg:flex-row gap-y-6 md:gap-6">
        <div className="lg:w-[40%]">
          <QuickTransfer />
        </div>
        <div className="lg:w-[60%]">
          <BalanceHistory />
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Dashboard