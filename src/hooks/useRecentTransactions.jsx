import { useState, useEffect } from 'react';

export const useRecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockedTransactions = [
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

        setTransactions(mockedTransactions);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return { transactions, loading, error };
};
