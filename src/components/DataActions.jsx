import { useRef } from "react";
import { exportToCSV, importFromCSV } from "../utils/exportImport";
import "./DataActions.css";

function DataActions({ expenses, onImport, onClearAll }) {
  const fileInputRef = useRef(null);

  const handleExport = () => {
    exportToCSV(expenses);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const importedExpenses = await importFromCSV(file);
      onImport(importedExpenses);
      alert(`Successfully imported ${importedExpenses.length} expenses!`);
    } catch (error) {
      alert(`Import failed: ${error}`);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all expenses? This cannot be undone.")) {
      onClearAll();
      alert("All expenses have been deleted!");
    }
  };

  return (
    <div className="data-actions card">
      <h3>📥 Data Management</h3>

      <div className="actions-grid">
        <button className="action-btn export-btn" onClick={handleExport}>
          📥 Export to CSV
        </button>

        <button className="action-btn import-btn" onClick={handleImportClick}>
          📤 Import from CSV
        </button>

        <button className="action-btn clear-btn" onClick={handleClearAll}>
          🗑️ Clear All
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <small className="action-help">
        Export your expenses as CSV for backup. Import to restore. Clear all to reset.
      </small>
    </div>
  );
}

export default DataActions;
