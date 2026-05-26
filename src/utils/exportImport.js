// exportImport.js

export const exportToCSV = (expenses) => {
  if (expenses.length === 0) {
    alert("No expenses to export!");
    return;
  }

  // Create CSV header
  const headers = ["Date", "Title", "Amount", "Category", "Payment Method"];
  const csvContent = [
    headers.join(","),
    ...expenses.map((exp) =>
      [
        exp.date,
        `"${exp.title}"`,
        exp.amount,
        exp.category,
        exp.paymentMethod || "Cash",
      ].join(",")
    ),
  ].join("\n");

  // Create blob and download
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `expenses_${new Date().toISOString().split("T")[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const importFromCSV = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const lines = text.trim().split("\n");

        if (lines.length < 2) {
          reject("Invalid CSV file");
          return;
        }

        const expenses = [];
        for (let i = 1; i < lines.length; i++) {
          const [date, title, amount, category, paymentMethod] =
            lines[i].split(",");
          if (date && title && amount && category) {
            expenses.push({
              id: Date.now() + Math.random(),
              date: date.trim(),
              title: title.replace(/"/g, "").trim(),
              amount: parseFloat(amount),
              category: category.trim(),
              paymentMethod: paymentMethod ? paymentMethod.trim() : "Cash",
            });
          }
        }

        if (expenses.length === 0) {
          reject("No valid expenses found in CSV");
          return;
        }

        resolve(expenses);
      } catch (error) {
        reject("Error parsing CSV: " + error.message);
      }
    };
    reader.onerror = () => reject("Error reading file");
    reader.readAsText(file);
  });
};
