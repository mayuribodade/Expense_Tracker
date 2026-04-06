import { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalAmount from "./components/TotalAmount";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
      if (storedExpenses && Array.isArray(storedExpenses)) {
        setExpenses(storedExpenses);
      }
    } catch (error) {
      console.log("Error loading expenses", error);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Debug
  useEffect(() => {
    console.log("Loaded expenses:", expenses);
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );
    setExpenses(updatedExpenses);
  };

  const editExpense = (expense) => {
    setEditingExpense(expense);
  };

  const updateExpense = (updatedExpense) => {
    const updatedList = expenses.map((exp) =>
      exp.id === updatedExpense.id ? updatedExpense : exp
    );
    setExpenses(updatedList);
    setEditingExpense(null);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm
        addExpense={addExpense}
        editingExpense={editingExpense}
        updateExpense={updateExpense}
      />

      <TotalAmount expenses={expenses} />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />
    </div>
  );
}

export default App;