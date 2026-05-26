import { useState, useEffect } from "react";

function ExpenseForm({ addExpense, editingExpense, updateExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setDate(editingExpense.date);
      setCategory(editingExpense.category);
      setPaymentMethod(editingExpense.paymentMethod || "Cash");
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      id: editingExpense ? editingExpense.id : Date.now(),
      title,
      amount: Number(amount),
      date,
      category,
      paymentMethod,
    };

    if (editingExpense) {
      updateExpense(expenseData);
    } else {
      addExpense(expenseData);
    }

    setTitle("");
    setAmount("");
    setDate("");
    setPaymentMethod("Cash");
    setCategory("Food");
  };

  return (
    <div className="card">
      <h2>{editingExpense ? "Edit Expense" : "Add Expense"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min="0"
          step="0.01"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">🍔 Food</option>
          <option value="Travel">🚗 Travel</option>
          <option value="Shopping">🛍️ Shopping</option>
          <option value="Bills">📄 Bills</option>
        </select>

        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="Cash">💵 Cash</option>
          <option value="Card">💳 Card</option>
          <option value="UPI">📱 UPI</option>
          <option value="Bank Transfer">🏦 Bank Transfer</option>
        </select>

        <button className="add-btn" type="submit">
          {editingExpense ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;