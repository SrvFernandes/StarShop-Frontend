import { useState, useMemo } from 'react';
import { CalendarEvent, CalendarFilters } from '../types/calendar';
import { isWithinInterval, startOfDay } from 'date-fns';

export const useCalendar = (orders: any[]) => {
  const [filters, setFilters] = useState<CalendarFilters>({
    status: 'all',
    dateRange: { start: null, end: null },
  });

  const events = useMemo(() => {
    return orders.map(order => ({
      id: `event-${order.id}`,
      orderId: order.id,
      title: `Order #${order.id.slice(-6)}`,
      date: new Date(order.deliveryDate || order.createdAt),
      type: order.status === 'delivered' ? 'delivery' : 'order',
      status: order.status as any,
      details: `Order status: ${order.status}`,
    }));
  }, [orders]);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const statusMatch = filters.status === 'all' || event.status === filters.status;
      const dateMatch = (!filters.dateRange.start || !filters.dateRange.end) 
        ? true 
        : isWithinInterval(startOfDay(event.date), { 
            start: startOfDay(filters.dateRange.start!), 
            end: startOfDay(filters.dateRange.end!) 
          });
      return statusMatch && dateMatch;
    });
  }, [events, filters]);

  return {
    events: filteredEvents,
    filters,
    setFilters,
  };
};
