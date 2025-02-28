import { useState, useEffect } from 'react';

export const useBalanceHistoryData = () => {
  const [labels, setLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const mockedLabels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
        const mockedData = [100, 350, 250, 770, 500, 200, 700];

        setLabels(mockedLabels);
        setChartData(mockedData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  return { labels, chartData, loading, error };
};
