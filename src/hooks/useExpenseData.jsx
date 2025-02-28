import { useState, useEffect } from 'react';

export const useExpenseData = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const mockedWithdrawData = [20, 30, 15, 35];

        setExpenseData(mockedWithdrawData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  return { expenseData, loading, error };
};
