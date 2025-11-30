import React from 'react';
import { TrendingDown, Tag, Calendar } from 'lucide-react';

export default function SummaryCards({ totalExpenses, expenseCount, expenses }) {
  const uniqueDates = new Set(expenses.map(e => e.date)).size;
  const avgPerDay = expenses.length > 0 ? (totalExpenses / Math.max(1, uniqueDates)).toFixed(2) : '0.00';

  return (
    <div className="summary-cards">
      <div className="summary-card purple">
        <div className="card-header">
          <TrendingDown size={20} />
          <p className="card-label">Total Expenses</p>
        </div>
        <p className="card-value">₹{totalExpenses.toFixed(2)}</p>
      </div>
      
      <div className="summary-card blue">
        <div className="card-header">
          <Tag size={20} />
          <p className="card-label">Total Transactions</p>
        </div>
        <p className="card-value">{expenseCount}</p>
      </div>

      <div className="summary-card indigo">
        <div className="card-header">
          <Calendar size={20} />
          <p className="card-label">Average per Day</p>
        </div>
        <p className="card-value">₹{avgPerDay}</p>
      </div>
    </div>
  );
}
