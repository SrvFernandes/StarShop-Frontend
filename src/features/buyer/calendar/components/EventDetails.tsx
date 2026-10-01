import React from 'react';
import { CalendarEvent as EventType } from '../types/calendar';
import { X, Package, Calendar, Tag } from 'lucide-react';

interface Props {
  event: EventType | null;
  onClose: () => void;
}

export const EventDetails: React.FC<Props> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-900 border border-white/30 w-full max-w-md rounded-xl p-6 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white">
          <X size={20} />
        </button>
        
        <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-white/80">
            <Package size={18} className="text-white/50" />
            <span>Status: <span className="capitalize font-semibold">{event.status}</span></span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <Calendar size={18} className="text-white/50" />
            <span>Date: {event.date.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <Tag size={18} className="text-white/50" />
            <span>{event.description}</span>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="mt-6 w-full py-2 rounded border border-white/30 text-white hover:bg-white/10 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};
