export type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

export interface CalendarEvent {
  id: string;
  orderId: string;
  title: string;
  date: Date;
  status: OrderStatus;
  description: string;
  deliveryDate?: Date;
}

export interface CalendarFilters {
  statusFilter: OrderStatus | 'all';
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
}
