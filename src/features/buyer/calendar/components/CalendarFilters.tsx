import React from 'react';
import { CalendarFilters } from '../types/calendar';

interface Props {
  filters: CalendarFilters;
  setFilters: React.Dispatch<React.SetStateAction<CalendarFilters>>;
}

export const CalendarFilters: React.FC<Props> = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 mb-4 border border-white rounded-lg bg-transparent text-white">
      <div className="flex flex-col gap-2">
        <label className="text-sm">Status Filter</label>
        <select 
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value as any })}
          className="bg-transparent border border-white rounded px-2 py-1 outline-none"
        >
          <option value="all" className="text-black">All Statuses</option>
          <option value="pending" className="text-black">Pending</option>
          <option value="shipped" className="text-black">Shipped</option>
          <option value="delivered" className="text-black">Delivered</option>
          <option value="cancelled" className="text-black">Cancelled</option>
        </select>
      </div>
    </div>
  );
};
