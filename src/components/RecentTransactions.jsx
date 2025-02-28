import React from 'react';
import CardIcon from "../assets/icons/card.svg?react";
import PayPalIcon from "../assets/icons/paypal.svg?react";
import CoinIcon from "../assets/icons/coin.svg?react";

import { useRecentTransactions } from '../hooks/useRecentTransactions'
import LoadingComponent from './LoadingComponent';

const RecentTransactions = () => {
  const { transactions, loading, error } = useRecentTransactions();

  const iconComponents = {
    coin: CoinIcon,
    paypal: PayPalIcon,
    card: CardIcon,
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4 ">
        <label className="font-semibold text-[22px]">Recent Transaction</label>
      </div>
      <div className="bg-white rounded-[40px] overflow-hidden p-3 md:p-6 h-[235px]">
        {loading ? (
          <LoadingComponent />
        ) : error ? (
          <div>Error: {error.message || 'Failed to fetch transactions'}</div>
        ) : (
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
                  <div className="flex items-center shrink-0">
                    <div
                      className={`w-[55px] h-[55px] rounded-full flex items-center justify-center ${backgroundColor}`}
                    >
                      <div className="w-7 h-7 ">
                        {IconComponent && <IconComponent />}
                      </div>
                    </div>
                    <div className="ml-3 max-w-[150px] md:max-w-full">
                      <p className="font-medium">{transaction.type}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <p
                    className={`font-semibold ${transaction.amount < 0 ? "text-[#FF4B4A]" : "text-[#41D4A8]"
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
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;