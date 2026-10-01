import { BuyerOrder } from '../types/calendar';

/**
 * Service to fetch buyer orders from API or local buyer store.
 * Keeps demonstration / default data separated from production routes.
 */
export async function fetchBuyerOrders(): Promise<BuyerOrder[]> {
  try {
    // In production, integrate with actual backend endpoint or user store
    return [
      {
        id: 'ORD-8832',
        product: 'Premium Hoodie (Black)',
        store: 'Urban Style Store',
        status: 'shipped',
        createdAt: new Date(Date.now() - 86400000 * 2),
        deliveryDate: new Date(Date.now() + 86400000 * 2),
        total: '85 XLM',
      },
      {
        id: 'ORD-8831',
        product: 'Urban Sneakers (Gray)',
        store: 'Sneaker Haven',
        status: 'delivered',
        createdAt: new Date(Date.now() - 86400000 * 5),
        deliveryDate: new Date(Date.now() - 86400000 * 2),
        total: '120 XLM',
      },
      {
        id: 'ORD-8830',
        product: 'Graphic T-Shirt (White)',
        store: 'Graphic Tees Co.',
        status: 'delivered',
        createdAt: new Date(Date.now() - 86400000 * 10),
        deliveryDate: new Date(Date.now() - 86400000 * 7),
        total: '35 XLM',
      },
      {
        id: 'ORD-8829',
        product: 'Wireless Earbuds',
        store: 'Tech Gadgets',
        status: 'pending',
        createdAt: new Date(),
        deliveryDate: new Date(Date.now() + 86400000 * 4),
        total: '75 XLM',
      },
    ];
  } catch (error) {
    console.error('Failed to fetch buyer orders:', error);
    return [];
  }
}
