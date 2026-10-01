import React from 'react';
import { CalendarFilters as FiltersType, OrderStatus } from '../types/calendar';

interface Props {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

export const CalendarFilters: React.FC<Props> = ({ filters, setFilters }) => {
  const statuses: OrderStatus[] = ['pending', 'shipped', 'delivered', 'cancelled'];

  return (
    <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm">
      <div className="flex flex-col gap-2">
        <label className="text-xs text-white/60 uppercase font-bold">Status</label>
        <select 
          value={filters.statusFilter}
          onChange={(e) => setFilters({ ...filters, statusFilter: e.target.value as any })}
          className="bg-transparent border border-white/30 text-white rounded px-2 py-1 outline-none focus:border-white"
        >
          <option value="all" className="bg-slate-900">All Statuses</option>
          {statuses.map(s => (
            <option key={s} value={s} className="bg-slate-900">{s.charAt(0).toUpperCase() + s.slice(1)}</option>
          ))}
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-xs text-white/60 uppercase font-bold">Date Range</label>
        <div className="flex gap-2">
          <input 
            type="date" 
            onChange={(e) => setFilters({ ...filters, dateRange: { ...filters.dateRange, start: e.target.value ? new Date(e.target.value) : null } })}
            className="bg-transparent border border-white/30 text-white rounded px-2 py-1 outline-none focus:border-white"
          />
          <input 
            type="date" 
            onChange={(e) => setFilters({ ...filters, dateRange: { ...filters.dateRange, end: e.target.value ? new Date(e.target.value) : null } })}
            className="bg-transparent border border-white/30 text-white rounded px-2 py-1 outline-none focus:border-white"
          />
        </div>
      </div>
    </div>
  );
};
