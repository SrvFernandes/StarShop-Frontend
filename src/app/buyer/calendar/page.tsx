'use client';

import React, { useState } from 'react';
import { 
  CalendarView, 
  CalendarFilters, 
  EventDetails, 
  CalendarHeader 
} from '@/features/buyer/calendar';
import { useCalendar } from '@/features/buyer/calendar/hooks/useCalendar';
import { CalendarEvent as EventType } from '@/features/buyer/calendar/types/calendar';
import { addMonths, subMonths } from 'date-fns';

// Mock data - In a real scenario, this would come from an API or Zustand store
const MOCK_ORDERS = [
  { id: '101', createdAt: new Date(), status: 'delivered', totalAmount: 150.00 },
  { id: '102', createdAt: addMonths(new Date(), 0), status: 'shipped', totalAmount: 89.90 },
  { id: '103', createdAt: subMonths(new Date(), 0), status: 'pending', totalAmount: 210.00 },
];

export default function BuyerCalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const { filteredEvents, filters, setFilters } = useCalendar(MOCK_ORDERS);

  return (
    <div className="p-6 min-h-screen bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <CalendarHeader 
          currentDate={currentMonth} 
          onPrev={() => setCurrentMonth(subMonths(currentMonth, 1))}
          onNext={() => setCurrentMonth(addMonths(currentMonth, 1))}
        />
        
        <CalendarFilters filters={filters} setFilters={setFilters} />
        
        <CalendarView 
          events={filteredEvents} 
          onEventClick={(event) => setSelectedEvent(event)} 
        />

        <EventDetails 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      </div>
    </div>
  );
}
