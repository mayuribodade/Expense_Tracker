import "./Dashboard.css";

function Dashboard({ expenses }) {
  // Calculate statistics
  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const expenseCount = expenses.length;
  const avgExpense = expenseCount > 0 ? (totalSpent / expenseCount).toFixed(2) : 0;
  const highestExpense = expenseCount > 0 ? Math.max(...expenses.map(exp => exp.amount)) : 0;

  // Calculate category breakdown
  const categoryBreakdown = {};
  expenses.forEach((exp) => {
    if (!categoryBreakdown[exp.category]) {
      categoryBreakdown[exp.category] = 0;
    }
    categoryBreakdown[exp.category] += exp.amount;
  });

  // Get recent expenses (last 3)
  const recentExpenses = expenses.slice(-3).reverse();

  // Calculate percentages for category bars
  const categoryPercentages = {};
  Object.keys(categoryBreakdown).forEach((cat) => {
    categoryPercentages[cat] = totalSpent > 0 ? (categoryBreakdown[cat] / totalSpent * 100).toFixed(1) : 0;
  });

  const getCategoryColor = (category) => {
    const colors = {
      Food: "#FF6B6B",
      Travel: "#4ECDC4",
      Shopping: "#FFE66D",
      Bills: "#95E1D3",
    };
    return colors[category] || "#A8E6CF";
  };

  return (
    <div className="dashboard">
      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card total">
          <div className="card-label">Total Spent</div>
          <div className="card-value">${totalSpent.toFixed(2)}</div>
        </div>

        <div className="summary-card count">
          <div className="card-label">Expenses</div>
          <div className="card-value">{expenseCount}</div>
        </div>

        <div className="summary-card average">
          <div className="card-label">Average</div>
          <div className="card-value">${avgExpense}</div>
        </div>

        <div className="summary-card highest">
          <div className="card-label">Highest</div>
          <div className="card-value">${highestExpense.toFixed(2)}</div>
        </div>
      </div>

      {/* Category Breakdown */}
      {Object.keys(categoryBreakdown).length > 0 && (
        <div className="card category-section">
          <h3>Spending by Category</h3>
          <div className="category-list">
            {Object.keys(categoryBreakdown).map((category) => (
              <div key={category} className="category-item">
                <div className="category-header">
                  <span className="category-name">{category}</span>
                  <span className="category-amount">${categoryBreakdown[category].toFixed(2)}</span>
                </div>
                <div className="category-bar">
                  <div
                    className="category-progress"
                    style={{
                      width: `${categoryPercentages[category]}%`,
                      backgroundColor: getCategoryColor(category),
                    }}
                  />
                </div>
                <div className="category-percent">{categoryPercentages[category]}%</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Expenses */}
      {recentExpenses.length > 0 && (
        <div className="card recent-section">
          <h3>Recent Transactions</h3>
          <div className="recent-list">
            {recentExpenses.map((expense) => (
              <div key={expense.id} className="recent-item">
                <div className="recent-info">
                  <div className="recent-title">{expense.title}</div>
                  <div className="recent-date">{expense.date}</div>
                </div>
                <div
                  className="recent-amount"
                  style={{ color: getCategoryColor(expense.category) }}
                >
                  ${expense.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
