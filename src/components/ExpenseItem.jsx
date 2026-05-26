function ExpenseItem({ expense, deleteExpense, editExpense }) {
  return (
    <div className="card expense-item">
      
      <div className="expense-info">
        <h3>{expense.title}</h3>
        <p className="expense-amount">💰 ${expense.amount.toFixed(2)}</p>
        <p className="expense-date">📅 {expense.date}</p>
        <p className="expense-category">🏷️ {expense.category}</p>
        {expense.paymentMethod && (
          <p className="expense-payment">💳 {expense.paymentMethod}</p>
        )}
      </div>

      <div className="expense-actions">
        <button className="edit-btn" onClick={() => editExpense(expense)}>
          ✏️ Edit
        </button>

        <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>
          🗑️ Delete
        </button>
      </div>

    </div>
  );
}

export default ExpenseItem;