import { BaseApi } from '@/shared/api/baseApi';
import { BuyerOrder } from '../types/calendar';
import { useBuyerOrderStore } from '@/shared/stores/buyerOrderStore';

/**
 * Service to fetch buyer orders from API or persisted buyer order store.
 * Zero hardcoded demo data: directly connects to backend API and persisted store.
 */
class BuyerOrderApiService extends BaseApi {
  public constructor() {
    super();
  }

  async getOrders(walletAddress?: string): Promise<BuyerOrder[]> {
    try {
      const url = walletAddress
        ? `/api/buyer/orders?wallet=${encodeURIComponent(walletAddress)}`
        : '/api/buyer/orders';
      const response = await this.get<BuyerOrder[]>(url);
      if (response.data && Array.isArray(response.data)) {
        return response.data;
      }
    } catch {
      // In development or when API is offline, fall back to persistent buyer order store
    }

    // Return orders from persistent client store
    return useBuyerOrderStore.getState().orders;
  }
}

export const buyerOrderApiService = new BuyerOrderApiService();

export async function fetchBuyerOrders(walletAddress?: string): Promise<BuyerOrder[]> {
  return buyerOrderApiService.getOrders(walletAddress);
}
