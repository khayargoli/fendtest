import { useState, useEffect } from 'react';

export const useTransactionChartData = () => {
  const [withdrawData, setWithdrawData] = useState([]);
  const [depositData, setDepositData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1800));

        const mockedWithdrawData = [450, 330, 310, 470, 110, 370, 380];
        const mockedDepositData = [220, 110, 230, 340, 210, 220, 300];

        setWithdrawData(mockedWithdrawData);
        setDepositData(mockedDepositData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  return { withdrawData, depositData, loading, error };
};
