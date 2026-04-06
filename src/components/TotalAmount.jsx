function TotalAmount({ expenses }) {
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="card">
      <h2>Total Expense</h2>
      <h3>₹ {total}</h3>
    </div>
  );
}

export default TotalAmount;