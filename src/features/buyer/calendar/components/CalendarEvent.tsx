import React from 'react';
import { CalendarEvent as EventType } from '../types/calendar';

interface CalendarEventProps {
  event: EventType;
  onClick: (event: EventType) => void;
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
  shipped: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
  delivered: 'bg-green-500/20 text-green-400 border-green-500/50',
  cancelled: 'bg-red-500/20 text-red-400 border-red-500/50',
};

export const CalendarEvent: React.FC<CalendarEventProps> = ({ event, onClick }) => {
  return (
    <div 
      onClick={() => onClick(event)}
      className={`
        cursor-pointer p-1 mb-1 text-[10px] rounded border truncate transition-all hover:scale-105
        ${statusColors[event.status] || 'bg-gray-500/20 text-gray-400 border-gray-500/50'}
      `}
    >
      {event.title}
    </div>
  );
};
