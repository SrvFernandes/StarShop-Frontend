import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { BuyerOrder } from '@/features/buyer/calendar/types/calendar';

interface BuyerOrderState {
  orders: BuyerOrder[];
  setOrders: (orders: BuyerOrder[]) => void;
  addOrder: (order: BuyerOrder) => void;
  clearOrders: () => void;
}

export const useBuyerOrderStore = create<BuyerOrderState>()(
  persist(
    (set) => ({
      orders: [],
      setOrders: (orders) => set({ orders }),
      addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
      clearOrders: () => set({ orders: [] }),
    }),
    {
      name: 'buyer-orders-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
