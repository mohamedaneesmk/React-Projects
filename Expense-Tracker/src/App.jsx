import React, { useState } from 'react';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import SummaryCards from './SummaryCards';
import ExpenseList from './ExpenseList';
import CategoryBreakdown from './CategoryBreakdown';
import './index.css';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Healthcare', 'Other'];

  const addExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const filteredExpenses = filterCategory === 'All' 
    ? expenses 
    : expenses.filter(expense => expense.category === filterCategory);

  const totalExpenses = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categoryTotals = categories.reduce((acc, cat) => {
    acc[cat] = expenses
      .filter(expense => expense.category === cat)
      .reduce((sum, expense) => sum + expense.amount, 0);
    return acc;
  }, {});

  return (
    <div className="app-container">
      <div className="max-width-container">
        <div className="main-card">
          <Header />
          <ExpenseForm categories={categories} onAddExpense={addExpense} />
          <SummaryCards 
            totalExpenses={totalExpenses} 
            expenseCount={filteredExpenses.length}
            expenses={expenses}
          />
        </div>

        <div className="content-grid">
          <ExpenseList 
            expenses={filteredExpenses}
            categories={categories}
            filterCategory={filterCategory}
            onFilterChange={setFilterCategory}
            onDeleteExpense={deleteExpense}
          />
          <CategoryBreakdown 
            categories={categories}
            categoryTotals={categoryTotals}
            totalExpenses={totalExpenses}
          />
        </div>
      </div>
    </div>
  );
}
