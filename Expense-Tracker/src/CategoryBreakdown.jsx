import React from 'react';

export default function CategoryBreakdown({ categories, categoryTotals, totalExpenses }) {
  return (
    <div className="category-breakdown">
      <h2 className="section-title">By Category</h2>
      <div className="category-list">
        {categories.map(cat => {
          const total = categoryTotals[cat];
          const percentage = totalExpenses > 0 ? (total / totalExpenses) * 100 : 0;
          
          return (
            <div key={cat} className="category-item">
              <div className="category-header">
                <span className="category-name">{cat}</span>
                <span className="category-total">₹{total.toFixed(2)}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
