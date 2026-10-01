import { useState, useMemo } from 'react';
import { CalendarEvent, CalendarFilters, OrderStatus } from '../types/calendar';
import { isWithinInterval, startOfDay } from 'date-fns';

export const useCalendar = (orders: any[]) => {
  const [filters, setFilters] = useState<CalendarFilters>({
    statusFilter: 'all',
    dateRange: { start: null, end: null },
  });

  const events = useMemo(() => {
    return orders.map(order => ({
      id: order.id,
      orderId: order.id,
      title: `Order #${order.id.slice(-6)}`,
      date: new Date(order.createdAt),
      status: order.status as OrderStatus,
      description: order.totalAmount ? `Total: $${order.totalAmount}` : 'No details available',
      deliveryDate: order.deliveryDate ? new Date(order.deliveryDate) : undefined,
    }));
  }, [orders]);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesStatus = filters.statusFilter === 'all' || event.status === filters.statusFilter;
      const matchesDate = (!filters.dateRange.start || !filters.dateRange.end) 
        ? true 
        : isWithinInterval(startOfDay(event.date), { 
            start: startOfDay(filters.dateRange.start!), 
            end: startOfDay(filters.dateRange.end!) 
          });
      
      return matchesStatus && matchesDate;
    });
  }, [events, filters]);

  return {
    filteredEvents,
    filters,
    setFilters,
  };
};
