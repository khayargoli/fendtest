import React, { useState, useEffect } from 'react';

export const useCreditCardData = () => {
    const [creditCards, setCreditCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCreditCardData = async () => {
        try {
          // Simulate API call with a delay
          await new Promise((resolve) => setTimeout(resolve, 100));
  
          // Mocked data
          const mockedData = [
            {
              type: 'dark',
              balance: 5756,
              cardHolder: 'Eddy Cusuma',
              validThru: '12/22',
              cardNumber: '3778 **** **** 1234',
            },
            {
              type: 'light',
              balance: 1234,
              cardHolder: 'Jane Doe',
              validThru: '01/25',
              cardNumber: '4567 **** **** 8901',
            },
          ];
  
          setCreditCards(mockedData);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchCreditCardData();
    }, []);
  
    return { creditCards, loading, error };
  };