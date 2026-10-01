import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentDate: Date;
  onPrev: () => void;
  onNext: () => void;
}

export const CalendarHeader: React.FC<Props> = ({ currentDate, onPrev, onNext }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-white">
        {format(currentDate, 'MMMM yyyy')}
      </h2>
      <div className="flex gap-2">
        <button 
          onClick={onPrev}
          className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={onNext}
          className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
