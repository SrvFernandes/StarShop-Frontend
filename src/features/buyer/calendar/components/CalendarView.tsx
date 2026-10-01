import React from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, format } from 'date-fns';
import { CalendarEvent } from '../types/calendar';
import { CalendarEvent as EventItem } from './CalendarEvent';

interface Props {
  currentDate: Date;
  events: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
}

export const CalendarView: React.FC<Props> = ({ currentDate, events, onEventClick }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="border border-white rounded-lg bg-transparent overflow-hidden">
      <div className="grid grid-cols-7 bg-white/10">
        {daysOfWeek.map(day => (
          <div key={day} className="p-2 text-center text-xs font-bold text-white border-b border-white">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {calendarDays.map((day, idx) => {
          const dayEvents = events.filter(event => 
            format(event.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
          );

          return (
            <div 
              key={idx} 
              className={`min-h-[100px] p-1 border-b border-r border-white/20 transition-colors ${
                !isSameMonth(day, monthStart) ? 'opacity-30' : ''
              }`}
            >
              <div className="text-right text-xs text-white mb-1">{format(day, 'd')}</div>
              <div className="flex flex-col gap-1">
                {dayEvents.map(event => (
                  <EventItem key={event.id} event={event} onClick={onEventClick} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
