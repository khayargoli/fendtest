const RecentTransactions = () => {
    const transactions = [
      {
        id: 1,
        type: 'Deposit from my Card',
        date: '28 January 2021',
        amount: -850,
        icon: 'card'
      },
      {
        id: 2,
        type: 'Deposit Paypal',
        date: '25 January 2021',
        amount: 2500,
        icon: 'paypal'
      },
      {
        id: 3,
        type: 'Jemi Wilson',
        date: '21 January 2021',
        amount: 5400,
        icon: 'user'
      }
    ]
    
    return (
      <div className="bg-white rounded-lg shadow p-4 h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Recent Transaction</h3>
        </div>
        
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.icon === 'card' ? 'bg-yellow-100' : 
                  transaction.icon === 'paypal' ? 'bg-blue-100' : 'bg-cyan-100'
                }`}>
                  <div className="w-5 h-5 bg-gray-400 rounded"></div> {/* Icon placeholder */}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{transaction.type}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <p className={`font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {transaction.amount < 0 ? `-$${Math.abs(transaction.amount)}` : `+$${transaction.amount}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default RecentTransactions