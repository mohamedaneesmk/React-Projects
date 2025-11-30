import React from 'react';
import { TrendingDown } from 'lucide-react';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses, categories, filterCategory, onFilterChange, onDeleteExpense }) {
  return (
    <div className="expense-list-container">
      <div className="expense-list-header">
        <h2 className="section-title">Recent Expenses</h2>
        <select
          value={filterCategory}
          onChange={(e) => onFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="expense-list">
        {expenses.length === 0 ? (
          <div className="empty-state">
            <TrendingDown size={48} className="empty-icon" />
            <p>No expenses yet. Add your first expense above!</p>
          </div>
        ) : (
          expenses.map(expense => (
            <ExpenseItem 
              key={expense.id}
              expense={expense}
              onDelete={onDeleteExpense}
            />
          ))
        )}
      </div>
    </div>
  );
}