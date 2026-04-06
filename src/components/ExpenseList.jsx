import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense, editExpense }) {
  return (
    <div>
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses added</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />
        ))
      )}
    </div>
  );
}

export default ExpenseList;