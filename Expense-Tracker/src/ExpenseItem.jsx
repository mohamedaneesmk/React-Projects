import React from 'react';
import { Trash2 } from 'lucide-react';

export default function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="expense-item">
      <div className="expense-details">
        <div className="expense-header">
          <span className="category-badge">
            {expense.category}
          </span>
          <h3 className="expense-description">{expense.description}</h3>
        </div>
        <p className="expense-date">{expense.date}</p>
      </div>
      <div className="expense-actions">
        <span className="expense-amount">
          ₹{expense.amount.toFixed(2)}
        </span>
        <button onClick={() => onDelete(expense.id)} className="delete-button">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}
