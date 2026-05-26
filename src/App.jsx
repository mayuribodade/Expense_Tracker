import { useState, useEffect, useCallback } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import EnhancedDashboard from "./components/EnhancedDashboard";
import FilterBar from "./components/FilterBar";
import Settings from "./components/Settings";
import DataActions from "./components/DataActions";
import Landing from "./components/Landing";

function App() {
  const [showApp, setShowApp] = useState(() => {
    return localStorage.getItem("appStarted") === "true";
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [budget, setBudget] = useState(5000);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleGetStarted = useCallback(() => {
    setIsTransitioning(true);
    localStorage.setItem("appStarted", "true");
    setShowApp(true);
    setIsTransitioning(false);
  }, []);

  const handleBackToLanding = useCallback(() => {
    setIsTransitioning(true);
    localStorage.setItem("appStarted", "false");
    setTimeout(() => {
      setShowApp(false);
      setIsTransitioning(false);
    }, 300);
  }, []);

  if (!showApp && !isTransitioning) {
    return <Landing onGetStarted={handleGetStarted} />;
  }

  if (isTransitioning) {
    return (
      <div className="transition-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  // Load from localStorage
  useEffect(() => {
    try {
      const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
      if (storedExpenses && Array.isArray(storedExpenses)) {
        setExpenses(storedExpenses);
        setFilteredExpenses(storedExpenses);
      }
    } catch (error) {
      console.log("Error loading expenses", error);
    }

    const storedBudget = localStorage.getItem("monthlyBudget");
    if (storedBudget) {
      setBudget(parseFloat(storedBudget));
    }
  }, []);

  // Keep filteredExpenses in sync with expenses when no filters are applied
  useEffect(() => {
    if (!selectedMonth) {
      setFilteredExpenses(expenses);
    }
  }, [expenses, selectedMonth]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  const handleFilter = (filtered) => {
    setFilteredExpenses(filtered);
  };

  const handleImport = (importedExpenses) => {
    setExpenses([...expenses, ...importedExpenses]);
  };

  const handleClearAll = () => {
    setExpenses([]);
    setEditingExpense(null);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="app-header">
        <h1>💰 Expense Tracker Pro</h1>
        <div className="header-actions">
          <button
            className="settings-icon-btn"
            onClick={() => setSettingsOpen(true)}
            title="Open Settings"
          >
            ⚙️
          </button>
          <button
            className="home-btn"
            onClick={handleBackToLanding}
            title="Back to Landing"
            disabled={isTransitioning}
          >
            🏠
          </button>
        </div>
      </div>

      <div className="container">
        <EnhancedDashboard expenses={expenses} budget={budget} theme={theme} />

        <FilterBar
          expenses={expenses}
          onFilter={handleFilter}
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
        />

        <ExpenseForm
          addExpense={addExpense}
          editingExpense={editingExpense}
          updateExpense={updateExpense}
        />

        <DataActions
          expenses={expenses}
          onImport={handleImport}
          onClearAll={handleClearAll}
        />

        <ExpenseList
          expenses={filteredExpenses}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
      </div>

      <Settings
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        onBudgetChange={setBudget}
        onThemeChange={handleThemeChange}
        theme={theme}
      />
    </div>
  );
}

export default App;