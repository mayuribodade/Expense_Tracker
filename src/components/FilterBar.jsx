import { useState } from "react";
import "./FilterBar.css";

function FilterBar({ expenses, onFilter, selectedMonth, onMonthChange }) {
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique months from expenses
  const getMonths = () => {
    const months = new Set();
    expenses.forEach((exp) => {
      const [year, month] = exp.date.split("-");
      months.add(`${year}-${month}`);
    });
    return Array.from(months).sort().reverse();
  };

  const handleFilter = () => {
    let filtered = expenses;

    // Filter by search title
    if (searchTitle) {
      filtered = filtered.filter((exp) =>
        exp.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((exp) => exp.category === selectedCategory);
    }

    // Filter by month
    if (selectedMonth) {
      filtered = filtered.filter((exp) => exp.date.startsWith(selectedMonth));
    }

    onFilter(filtered);
  };

  const handleReset = () => {
    setSearchTitle("");
    setSelectedCategory("All");
    onMonthChange("");
    onFilter(expenses);
  };

  // Update filter when inputs change
  useState(() => {
    handleFilter();
  });

  return (
    <div className="filter-bar card">
      <h3>🔍 Filter & Search</h3>

      <div className="filter-inputs">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTitle}
          onChange={(e) => {
            setSearchTitle(e.target.value);
            let filtered = expenses.filter((exp) =>
              exp.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            if (selectedCategory !== "All") {
              filtered = filtered.filter((exp) => exp.category === selectedCategory);
            }
            if (selectedMonth) {
              filtered = filtered.filter((exp) => exp.date.startsWith(selectedMonth));
            }
            onFilter(filtered);
          }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            let filtered = expenses;
            if (e.target.value !== "All") {
              filtered = filtered.filter((exp) => exp.category === e.target.value);
            }
            if (searchTitle) {
              filtered = filtered.filter((exp) =>
                exp.title.toLowerCase().includes(searchTitle.toLowerCase())
              );
            }
            if (selectedMonth) {
              filtered = filtered.filter((exp) => exp.date.startsWith(selectedMonth));
            }
            onFilter(filtered);
          }}
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
        </select>

        <select
          value={selectedMonth}
          onChange={(e) => {
            onMonthChange(e.target.value);
            let filtered = expenses;
            if (e.target.value) {
              filtered = filtered.filter((exp) => exp.date.startsWith(e.target.value));
            }
            if (selectedCategory !== "All") {
              filtered = filtered.filter((exp) => exp.category === selectedCategory);
            }
            if (searchTitle) {
              filtered = filtered.filter((exp) =>
                exp.title.toLowerCase().includes(searchTitle.toLowerCase())
              );
            }
            onFilter(filtered);
          }}
        >
          <option value="">All Months</option>
          {getMonths().map((month) => (
            <option key={month} value={month}>
              {new Date(month + "-01").toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </option>
          ))}
        </select>

        <button className="reset-btn" onClick={handleReset}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
