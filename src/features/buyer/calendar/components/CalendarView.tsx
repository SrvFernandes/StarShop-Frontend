import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { CalendarEvent } from './CalendarEvent';
import { CalendarEvent as EventType } from '../types/calendar';

interface Props {
  events: EventType[];
  onEventClick: (event: EventType) => void;
}

export const CalendarView: React.FC<Props> = ({ events, onEventClick }) => {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] border border-white/20 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
        {/* Header */}
        <div className="grid grid-cols-7 border-b border-white/20 bg-white/10">
          {weekDays.map(day => (
            <div key={day} className="py-2 text-center text-xs font-bold text-white/60 uppercase">
              {day}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, idx) => {
            const dayEvents = events.filter(event => isSameDay(event.date, day));
            return (
              <div 
                key={idx} 
                className={`
                  min-h-[100px] p-2 border-r border-b border-white/10 transition-colors
                  ${!isSameMonth(day, monthStart) ? 'bg-black/20 text-white/30' : 'text-white/80'}
                  ${isSameDay(day, today) ? 'bg-white/10' : ''}
                `}
              >
                <span className="text-xs font-medium block mb-2">{format(day, 'd')}</span>
                <div className="flex flex-col gap-1">
                  {dayEvents.map(event => (
                    <CalendarEvent key={event.id} event={event} onClick={onEventClick} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
