import { useState, useEffect } from 'react';
import { BuyerOrder } from '../types/calendar';
import { fetchBuyerOrders } from '../services/buyerOrders';

export function useBuyerOrders() {
  const [orders, setOrders] = useState<BuyerOrder[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    fetchBuyerOrders().then((data) => {
      if (isMounted) {
        setOrders(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { orders, isLoading };
}
