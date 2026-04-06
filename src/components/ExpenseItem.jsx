function ExpenseItem({ expense, deleteExpense, editExpense }) {
  return (
    <div className="card expense-item">
      
      <div className="expense-info">
        <h3>{expense.title}</h3>
        <p>₹ {expense.amount}</p>
        <p>{expense.date}</p>
        <p><b>Category:</b> {expense.category}</p>
      </div>

      <div>
        <button className="edit-btn" onClick={() => editExpense(expense)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>
          Delete
        </button>
      </div>

    </div>
  );
}

export default ExpenseItem;