'use client';

import React, { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { CalendarView } from '@/features/buyer/calendar/components/CalendarView';
import { CalendarHeader } from '@/features/buyer/calendar/components/CalendarHeader';
import { CalendarFilters } from '@/features/buyer/calendar/components/CalendarFilters';
import { EventDetails } from '@/features/buyer/calendar/components/EventDetails';
import { useCalendar } from '@/features/buyer/calendar/hooks/useCalendar';
import { CalendarEvent } from '@/features/buyer/calendar/types/calendar';

// Mock data for demonstration - In real app, this comes from a store/API
const MOCK_ORDERS = [
  { id: '101', status: 'delivered', deliveryDate: new Date(), total: '$120.00', createdAt: new Date() },
  { id: '102', status: 'shipped', deliveryDate: new Date(Date.now() + 86400000 * 2), total: '$45.00', createdAt: new Date() },
  { id: '103', status: 'pending', deliveryDate: new Date(Date.now() + 86400000 * 5), total: '$200.00', createdAt: new Date() },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  
  const { filteredEvents, filters, setFilters } = useCalendar(MOCK_ORDERS);

  return (
    <div className="min-h-screen p-6 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Shopping Calendar</h1>
          <p className="opacity-70">Track your orders and delivery dates</p>
        </header>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
            <CalendarHeader 
              currentDate={currentDate} 
              onPrevMonth={() => setCurrentDate(subMonths(currentDate, 1))}
              onNextMonth={() => setCurrentDate(addMonths(currentDate, 1))}
            />
            <CalendarFilters filters={filters} setFilters={setFilters} />
          </div>

          <CalendarView 
            currentDate={currentDate} 
            events={filteredEvents} 
            onEventClick={setSelectedEvent} 
          />
        </div>
      </div>

      <EventDetails 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </div>
  );
}
