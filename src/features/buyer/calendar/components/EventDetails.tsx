import React from 'react';
import { CalendarEvent } from '../types/calendar';
import { X } from 'lucide-react';

interface EventDetailsProps {
  event: CalendarEvent | null;
  onClose: () => void;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-transparent border border-white rounded-xl p-6 max-w-md w-full relative text-white">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full"
        >
          <X size={20} />
        </button>
        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
        <div className="space-y-3">
          <p><span className="opacity-70">Date:</span> {event.date.toDateString()}</p>
          <p><span className="opacity-70">Type:</span> {event.type}</p>
          <p><span className="opacity-70">Status:</span> {event.status}</p>
          <p className="mt-4 p-3 bg-white/10 rounded border border-white/20">{event.details}</p>
        </div>
      </div>
    </div>
  );
};
