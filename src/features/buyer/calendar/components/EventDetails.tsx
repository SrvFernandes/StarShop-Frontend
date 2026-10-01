import React from 'react';
import { CalendarEvent } from '../types/calendar';

interface Props {
  event: CalendarEvent | null;
  onClose: () => void;
}

export const EventDetails: React.FC<Props> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="p-6 border border-white rounded-lg bg-transparent text-white w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{event.title}</h3>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        <div className="space-y-3">
          <p><span className="opacity-70">Date:</span> {event.date.toLocaleDateString()}</p>
          <p><span className="opacity-70">Status:</span> {event.status}</p>
          <p><span className="opacity-70">Details:</span> {event.details}</p>
        </div>
        <button 
          onClick={onClose}
          className="w-full mt-6 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};
