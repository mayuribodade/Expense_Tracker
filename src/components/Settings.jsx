import { useState, useEffect } from "react";
import "./Settings.css";

function Settings({ isOpen, onClose, onBudgetChange, onThemeChange, theme }) {
  const [budget, setBudget] = useState(() => {
    return localStorage.getItem("monthlyBudget") || "5000";
  });

  useEffect(() => {
    localStorage.setItem("monthlyBudget", budget);
    onBudgetChange(parseFloat(budget));
  }, [budget, onBudgetChange]);

  if (!isOpen) return null;

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>⚙️ Settings</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="settings-content">
          {/* Budget Setting */}
          <div className="setting-item">
            <label htmlFor="budget">💰 Monthly Budget</label>
            <div className="input-group">
              <span className="currency">$</span>
              <input
                id="budget"
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                min="0"
                placeholder="Enter your monthly budget"
              />
            </div>
            <small>Set your target budget for each month</small>
          </div>

          {/* Theme Setting */}
          <div className="setting-item">
            <label>🌙 Theme</label>
            <div className="theme-toggle">
              <button
                className={`theme-btn ${theme === "dark" ? "active" : ""}`}
                onClick={() => onThemeChange("dark")}
              >
                🌙 Dark
              </button>
              <button
                className={`theme-btn ${theme === "light" ? "active" : ""}`}
                onClick={() => onThemeChange("light")}
              >
                ☀️ Light
              </button>
            </div>
          </div>
        </div>

        <div className="settings-footer">
          <button className="save-btn" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
