import React from 'react';
import { CalendarFilterState, OrderStatus } from '../types/calendar';

interface CalendarFiltersProps {
  filters: CalendarFilterState;
  setFilters: React.Dispatch<React.SetStateAction<CalendarFilterState>>;
}

export const CalendarFilters: React.FC<CalendarFiltersProps> = ({ filters, setFilters }) => {
  const statuses: OrderStatus[] = ['pending', 'shipped', 'delivered', 'cancelled'];

  return (
    <div className="flex flex-wrap gap-4 p-4 mb-4 border border-white rounded-lg bg-transparent text-white">
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase opacity-70">Filter by Status</label>
        <select 
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value as OrderStatus | 'all' })}
          className="bg-transparent border border-white rounded px-2 py-1 outline-none focus:ring-1 ring-white"
        >
          <option value="all" className="text-black">All Statuses</option>
          {statuses.map(s => (
            <option key={s} value={s} className="text-black">{s.charAt(0).toUpperCase() + s.slice(1)}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
