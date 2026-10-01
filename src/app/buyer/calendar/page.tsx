'use client';

import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import { 
  CalendarView, 
  CalendarHeader, 
  CalendarFilters, 
  EventDetails 
} from '@/features/buyer/calendar';
import { useCalendar } from '@/features/buyer/calendar/hooks/useCalendar';
import { CalendarEvent as EventType } from '@/features/buyer/calendar/types/calendar';

// Mock data for orders - In real scenario, this comes from an API/Store
const MOCK_ORDERS = [
  { id: '101', status: 'delivered', deliveryDate: new Date(), createdAt: new Date() },
  { id: '102', status: 'shipped', deliveryDate: addMonths(new Date(), 0), createdAt: new Date() },
  { id: '103', status: 'pending', deliveryDate: subMonths(new Date(), 0), createdAt: new Date() },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  
  const { events, filters, setFilters } = useCalendar(MOCK_ORDERS);

  return (
    <div className="p-6 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">My Shopping Calendar</h1>
      
      <CalendarFilters filters={filters} setFilters={setFilters} />
      
      <CalendarHeader 
        currentDate={currentDate} 
        onPrevMonth={() => setCurrentDate(subMonths(currentDate, 1))}
        onNextMonth={() => setCurrentDate(addMonths(currentDate, 1))}
      />
      
      <CalendarView 
        currentDate={currentDate} 
        events={events} 
        onEventClick={setSelectedEvent} 
      />

      <EventDetails 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </div>
  );
}
