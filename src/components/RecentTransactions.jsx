import CardIcon from "../assets/icons/card.svg?react";
import PayPalIcon from "../assets/icons/paypal.svg?react";
import CoinIcon from "../assets/icons/coin.svg?react";

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      type: "Deposit from my Card",
      date: "28 January 2021",
      amount: -850,
      icon: "card",
    },
    {
      id: 2,
      type: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
      icon: "paypal",
    },
    {
      id: 3,
      type: "Jemi Wilson",
      date: "21 January 2021",
      amount: 5400,
      icon: "coin",
    },
  ];

  const iconComponents = {
    coin: CoinIcon,
    paypal: PayPalIcon,
    card: CardIcon,
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-semibold text-[22px]">Recent Transaction</label>
      </div>
      <div className="bg-white rounded-[40px] shadow p-6 h-[235px]">
        <div className="space-y-4">
          {transactions.map((transaction) => {
            const IconComponent = iconComponents[transaction.icon];
            const backgroundColor =
              transaction.icon === "card"
                ? "bg-[#FFF5D9]"
                : transaction.icon === "paypal"
                  ? "bg-[#E7EDFF]"
                  : "bg-[#DCFAF8]";

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div
                    className={`w-[55px] h-[55px] rounded-full flex items-center justify-center ${backgroundColor}`}
                  >
                    <div className="w-7 h-7">
                      {IconComponent && <IconComponent />}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{transaction.type}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <p
                  className={`font-semibold ${transaction.amount < 0 ? "text-red-500" : "text-green-500"
                    }`}
                >
                  {transaction.amount < 0
                    ? `-$${Math.abs(transaction.amount)}`
                    : `+$${transaction.amount}`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;