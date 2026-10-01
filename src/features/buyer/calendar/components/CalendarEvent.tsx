import React from 'react';
import { CalendarEvent } from '../types/calendar';

interface Props {
  event: CalendarEvent;
  onClick: (event: CalendarEvent) => void;
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500/20 border-yellow-500 text-yellow-500',
  shipped: 'bg-blue-500/20 border-blue-500 text-blue-500',
  delivered: 'bg-green-500/20 border-green-500 text-green-500',
  cancelled: 'bg-red-500/20 border-red-500 text-red-500',
};

export const CalendarEvent: React.FC<Props> = ({ event, onClick }) => {
  return (
    <div 
      onClick={() => onClick(event)}
      className={`cursor-pointer p-1 mb-1 text-xs border rounded truncate transition-all hover:scale-105 ${statusColors[event.status] || 'border-white'}`}
    >
      {event.title}
    </div>
  );
};
