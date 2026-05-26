import "./EnhancedDashboard.css";

function EnhancedDashboard({ expenses, budget, theme }) {
  // Get current month
  const currentMonth = new Date().toISOString().split("-").slice(0, 2).join("-");

  // Calculate statistics
  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const expenseCount = expenses.length;
  const avgExpense = expenseCount > 0 ? (totalSpent / expenseCount).toFixed(2) : 0;
  const highestExpense = expenseCount > 0 ? Math.max(...expenses.map(exp => exp.amount)) : 0;

  // Calculate current month stats
  const monthExpenses = expenses.filter(exp => exp.date.startsWith(currentMonth));
  const monthlyTotal = monthExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  // Calculate category breakdown
  const categoryBreakdown = {};
  expenses.forEach((exp) => {
    if (!categoryBreakdown[exp.category]) {
      categoryBreakdown[exp.category] = 0;
    }
    categoryBreakdown[exp.category] += exp.amount;
  });

  // Get payment method breakdown
  const paymentBreakdown = {};
  expenses.forEach((exp) => {
    const method = exp.paymentMethod || "Cash";
    if (!paymentBreakdown[method]) {
      paymentBreakdown[method] = 0;
    }
    paymentBreakdown[method] += exp.amount;
  });

  // Calculate percentages
  const categoryPercentages = {};
  Object.keys(categoryBreakdown).forEach((cat) => {
    categoryPercentages[cat] = totalSpent > 0 ? (categoryBreakdown[cat] / totalSpent * 100).toFixed(1) : 0;
  });

  // Draw Pie Chart
  const drawPieChart = () => {
    const categories = Object.keys(categoryBreakdown);
    const colors = {
      Food: "#FF6B6B",
      Travel: "#4ECDC4",
      Shopping: "#FFE66D",
      Bills: "#95E1D3",
    };

    let svg = `<svg viewBox="0 0 200 200" width="200" height="200">`;
    let angle = 0;

    categories.forEach((cat, index) => {
      const percentage = categoryPercentages[cat] / 100;
      const sliceAngle = percentage * 360;
      const startAngle = angle * Math.PI / 180;
      const endAngle = (angle + sliceAngle) * Math.PI / 180;

      const x1 = 100 + 80 * Math.cos(startAngle);
      const y1 = 100 + 80 * Math.sin(startAngle);
      const x2 = 100 + 80 * Math.cos(endAngle);
      const y2 = 100 + 80 * Math.sin(endAngle);

      const largeArc = sliceAngle > 180 ? 1 : 0;

      const path = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;
      svg += `<path d="${path}" fill="${colors[cat] || '#A8E6CF'}" stroke="#1e2a38" stroke-width="2"/>`;

      angle += sliceAngle;
    });

    svg += `</svg>`;
    return svg;
  };

  // Get insights
  const getInsights = () => {
    const insights = [];

    if (categoryBreakdown.Food) {
      const foodPercent = categoryPercentages.Food;
      if (foodPercent > 30) {
        insights.push(`💡 Food expenses are ${foodPercent}% of total - consider planning meals!`);
      }
    }

    if (monthlyTotal > budget) {
      const overspend = (monthlyTotal - budget).toFixed(2);
      insights.push(`⚠️ You've exceeded this month's budget by $${overspend}`);
    }

    if (expenseCount > 0) {
      const lastExp = expenses[expenses.length - 1];
      insights.push(`📌 Your most expensive item was $${highestExpense.toFixed(2)}`);
    }

    if (expenses.length > 0 && monthExpenses.length < expenses.length) {
      insights.push(`📊 Showing ${monthExpenses.length} of ${expenseCount} total expenses this month`);
    }

    return insights;
  };

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
    <div className={`enhanced-dashboard ${theme}`}>
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

      {/* Monthly Budget Progress */}
      <div className="card budget-section">
        <h3>📅 Monthly Budget</h3>
        <div className="budget-info">
          <div className="budget-text">
            <span className="budget-spent">${monthlyTotal.toFixed(2)}</span>
            <span className="budget-total">/ ${budget.toFixed(2)}</span>
          </div>
          <div className="budget-bar">
            <div
              className={`budget-progress ${monthlyTotal > budget ? 'exceeded' : ''}`}
              style={{
                width: `${Math.min((monthlyTotal / budget) * 100, 100)}%`,
              }}
            />
          </div>
          <div className="budget-status">
            {monthlyTotal > budget ? (
              <span className="budget-warning">⚠️ Budget exceeded by ${(monthlyTotal - budget).toFixed(2)}</span>
            ) : (
              <span className="budget-ok">✓ ${(budget - monthlyTotal).toFixed(2)} remaining</span>
            )}
          </div>
        </div>
      </div>

      {/* Pie Chart & Category Breakdown */}
      <div className="charts-grid">
        {Object.keys(categoryBreakdown).length > 0 && (
          <div className="card pie-chart-section">
            <h3>Category Distribution</h3>
            <div
              className="pie-chart"
              dangerouslySetInnerHTML={{ __html: drawPieChart() }}
            />
          </div>
        )}

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
      </div>

      {/* Payment Methods Breakdown */}
      {Object.keys(paymentBreakdown).length > 0 && (
        <div className="card payment-section">
          <h3>Payment Methods</h3>
          <div className="payment-list">
            {Object.keys(paymentBreakdown).map((method) => (
              <div key={method} className="payment-item">
                <span className="payment-method">{method}</span>
                <span className="payment-amount">${paymentBreakdown[method].toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Smart Insights */}
      {getInsights().length > 0 && (
        <div className="card insights-section">
          <h3>💡 Smart Insights</h3>
          <div className="insights-list">
            {getInsights().map((insight, index) => (
              <div key={index} className="insight-item">
                {insight}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default EnhancedDashboard;
