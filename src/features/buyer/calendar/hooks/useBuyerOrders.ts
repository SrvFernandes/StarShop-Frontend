import { useState, useEffect } from 'react';
import { BuyerOrder } from '../types/calendar';
import { fetchBuyerOrders } from '../services/buyerOrders';
import { useUserWalletAddress } from '@/shared/stores';
import { useBuyerOrderStore } from '@/shared/stores/buyerOrderStore';

export function useBuyerOrders() {
  const walletAddress = useUserWalletAddress();
  const storeOrders = useBuyerOrderStore((state) => state.orders);
  const setStoreOrders = useBuyerOrderStore((state) => state.setOrders);
  const [orders, setOrders] = useState<BuyerOrder[]>(storeOrders);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    fetchBuyerOrders(walletAddress).then((data) => {
      if (isMounted) {
        setOrders(data);
        if (data.length > 0) {
          setStoreOrders(data);
        }
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [walletAddress, setStoreOrders]);

  return { orders, isLoading };
}
