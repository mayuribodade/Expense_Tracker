# 💰 ExpenseTracker Pro

A modern, feature-rich expense tracking application built with React and Vite. Track your spending, set budgets, analyze expenses, and take control of your finances with beautiful analytics and insights.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Active-brightgreen.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

---

## ✨ Features

### 📊 **Smart Dashboard**
- Real-time expense analytics with summary cards (Total spent, Count, Average, Highest)
- Category breakdown with visual progress bars
- Interactive pie chart showing category distribution
- Recent transactions display
- Payment method breakdown
- Smart insights and spending patterns

### 💰 **Budget Management**
- Set monthly budgets for total spending
- Visual budget progress indicator
- Budget exceeded warnings and alerts
- Remaining budget calculation
- Real-time tracking

### 🔍 **Advanced Filtering**
- Search expenses by title
- Filter by category (Food, Travel, Shopping, Bills)
- Filter by date/month
- Clear filters with one click
- Real-time filtering results

### 💳 **Payment Method Tracking**
- Track spending across multiple payment methods
- Supported methods: Cash, Card, UPI, Bank Transfer
- Visual breakdown by payment method
- Payment method statistics

### 📥 **Data Management**
- Export expenses to CSV for backup
- Import expenses from CSV files
- Clear all expenses (with confirmation)
- Persistent data storage using localStorage
- Automatic data sync

### 🎨 **Beautiful UI**
- Dark & Light theme toggle
- Responsive design (Mobile, Tablet, Desktop)
- Smooth animations and transitions
- Professional gradient backgrounds
- Intuitive navigation
- Accessibility-friendly interface

### 🚀 **Additional Features**
- Professional landing page with feature showcase
- Real-time updates across all components
- Form validation
- Error handling
- Smooth page transitions
- Settings modal with customization options
- Mobile-optimized interface

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 8.0
- **Styling**: CSS3 with modern gradients and animations
- **State Management**: React Hooks (useState, useEffect, useCallback)
- **Storage**: Browser localStorage
- **Language**: JavaScript (ES6+)

---

Live Demo
https://mayuribodade.github.io/Expense_Tracker/

## 📋 Project Structure

```
expense-tracker/
├── src/
│   ├── components/
│   │   ├── App.jsx                 # Main app component
│   │   ├── App.css                 # App styles
│   │   ├── Landing.jsx             # Landing page
│   │   ├── Landing.css
│   │   ├── Dashboard.jsx           # Basic dashboard (legacy)
│   │   ├── Dashboard.css
│   │   ├── EnhancedDashboard.jsx   # Advanced dashboard with analytics
│   │   ├── EnhancedDashboard.css
│   │   ├── ExpenseForm.jsx         # Form to add/edit expenses
│   │   ├── ExpenseList.jsx         # List of expenses
│   │   ├── ExpenseItem.jsx         # Individual expense item
│   │   ├── FilterBar.jsx           # Search and filter component
│   │   ├── FilterBar.css
│   │   ├── Settings.jsx            # Settings modal
│   │   ├── Settings.css
│   │   ├── DataActions.jsx         # Export/Import/Clear actions
│   │   ├── DataActions.css
│   │   ├── TotalAmount.jsx         # Total display (legacy)
│   │   └── ...
│   ├── utils/
│   │   └── exportImport.js         # CSV export/import utilities
│   ├── App.jsx                      # App entry point
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd expense-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The app will typically run at `http://localhost:5173/`
   - Click "Get Started" on the landing page to enter the app

---

## 📖 Usage Guide

### Adding an Expense
1. Fill in the expense form with:
   - **Title**: Description of the expense
   - **Amount**: Expense amount
   - **Date**: Date of the expense
   - **Category**: Food, Travel, Shopping, or Bills
   - **Payment Method**: Cash, Card, UPI, or Bank Transfer
2. Click "Add Expense"
3. The expense appears immediately in the dashboard and list

### Editing an Expense
1. Find the expense in the list
2. Click the ✏️ **Edit** button
3. Form will populate with existing data
4. Make changes and click "Update Expense"

### Deleting an Expense
1. Find the expense in the list
2. Click the 🗑️ **Delete** button
3. Expense is removed immediately

### Filtering Expenses
1. Use the **Filter Bar** at the top
2. Search by title, category, or month
3. Combine multiple filters
4. Click "Clear Filters" to reset

### Setting a Budget
1. Click the ⚙️ **Settings** button in the header
2. Enter your monthly budget amount
3. Click "Done"
4. Dashboard will show budget progress and alerts

### Changing Theme
1. Click ⚙️ **Settings**
2. Select Dark or Light theme
3. Changes apply immediately

### Exporting Data
1. Scroll to **Data Management** section
2. Click 📥 **Export to CSV**
3. File downloads as `expenses_YYYY-MM-DD.csv`

### Importing Data
1. Click 📤 **Import from CSV**
2. Select a CSV file with expenses
3. File must have columns: Date, Title, Amount, Category, Payment Method
4. New expenses are added to your existing data

### Clearing All Data
1. Click 🗑️ **Clear All** in Data Management
2. Confirm the action
3. All expenses are deleted (use export first to backup!)

---

## 📊 Dashboard Features

### Summary Cards
- **Total Spent**: Sum of all expenses
- **Expenses**: Total number of expense entries
- **Average**: Average expense amount
- **Highest**: Highest single expense amount

### Monthly Budget
- Shows current month's spending
- Visual progress bar with color indication
- Budget exceeded warnings
- Remaining budget display

### Category Breakdown
- Pie chart showing percentage distribution
- Progress bars for each category
- Amount and percentage display
- Color-coded visualization

### Payment Methods
- Summary of spending by payment method
- Grid display with amounts
- Quick financial overview

### Smart Insights
- Budget overspending alerts
- Category spending patterns
- Spending trend indicators
- Personalized recommendations

---

## 🎨 Responsive Design

The app is fully responsive and works seamlessly on:

- **Desktop** (1024px+): Full-featured layout with all elements visible
- **Tablet** (768px - 1024px): Optimized grid layouts, touch-friendly
- **Mobile** (< 768px): Single column layout, optimized for small screens
- **Small Mobile** (< 480px): Compact design with essential features

---

## 💾 Data Storage

- All expenses are stored in **browser localStorage**
- Data persists between sessions
- Settings (budget, theme) are also saved locally
- Export feature allows backup to external files

### Data Format
Each expense is stored as:
```json
{
  "id": 1234567890,
  "title": "Lunch at Restaurant",
  "amount": 25.50,
  "date": "2026-05-26",
  "category": "Food",
  "paymentMethod": "Card"
}
```

---

## 🔒 Privacy & Security

- **No backend server**: All data stays on your device
- **No cloud sync**: Your financial data is private
- **Browser-based**: Works entirely in your browser
- **Export anytime**: Easy data extraction and backup

---

## 🛠️ Development

### Available Scripts

**Development Server**
```bash
npm run dev
```
Runs the app in development mode with hot module reloading.

**Build for Production**
```bash
npm run build
```
Creates optimized production build in `dist/` folder.

**Preview Production Build**
```bash
npm run preview
```
Locally preview the production build.

**Lint Code**
```bash
npm run lint
```
Check code quality with ESLint.

---

## 🎯 Project Goals

✅ Provide an easy-to-use expense tracker
✅ Offer powerful analytics and insights
✅ Support multiple payment methods
✅ Maintain data privacy
✅ Deliver beautiful, responsive UI
✅ Enable data export/import
✅ Provide budget management tools
✅ Support light and dark themes

---

## 🐛 Known Issues & Limitations

- Data is stored locally (not synced across devices)
- No user authentication or multi-device sync
- Limited to browser storage capacity
- CSV import requires specific format

---

## 🚧 Future Enhancements

- 📱 Mobile app (React Native)
- ☁️ Cloud sync with Firebase
- 👥 Multi-user support with authentication
- 📈 Advanced charts and visualizations
- 📧 Email reports
- 🔔 Push notifications
- 💱 Multi-currency support
- 📊 Monthly/yearly comparisons
- 🎯 Savings goals
- 📋 Receipt uploads

---

## 📝 License

This project is licensed under the MIT License - feel free to use, modify, and distribute.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push
5. Submit a pull request

---

## 💬 Support

For issues, suggestions, or questions:
- Open an issue on GitHub
- Check existing documentation
- Review the code comments

---

## 👨‍💻 Author

Created with ❤️ by ExpenseTracker Team

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Last Updated**: May 26, 2026
**Version**: 1.0.0
**Status**: ✅ Production Ready
