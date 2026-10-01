import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentDate, onPrevMonth, onNextMonth }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-4 border border-white rounded-lg bg-transparent text-white">
      <button 
        onClick={onPrevMonth}
        className="px-4 py-2 transition-colors border border-white rounded hover:bg-white hover:text-black"
      >
        Previous
      </button>
      <h2 className="text-xl font-bold">
        {format(currentDate, 'MMMM yyyy')}
      </h2>
      <button 
        onClick={onNextMonth}
        className="px-4 py-2 transition-colors border border-white rounded hover:bg-white hover:text-black"
      >
        Next
      </button>
    </div>
  );
};
