import "./Landing.css";

function Landing({ onGetStarted }) {
  return (
    <div className="landing">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="logo">💰 ExpenseTracker</div>
          <button className="nav-cta" onClick={onGetStarted}>
            Launch App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Master Your <span className="highlight">Money</span>
          </h1>
          <p className="hero-subtitle">
            Smart expense tracking. Real-time insights. Complete control.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={onGetStarted}>
              Get Started Free →
            </button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <p className="hero-footer">No credit card required. Start tracking in seconds.</p>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-stat">
              <span className="stat-label">Total Spent</span>
              <span className="stat-value">$2,450</span>
            </div>
            <div className="card-stat">
              <span className="stat-label">Budget Left</span>
              <span className="stat-value">$1,550</span>
            </div>
            <div className="card-stat">
              <span className="stat-label">This Month</span>
              <span className="stat-value">May 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Powerful Features</h2>
        <p className="features-subtitle">Everything you need to manage your finances effortlessly</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Smart Dashboard</h3>
            <p>Real-time analytics with category breakdown and spending trends</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Budget Tracking</h3>
            <p>Set monthly budgets and get instant alerts when you overspend</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Smart Search</h3>
            <p>Filter expenses by category, date, or payment method instantly</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌙</div>
            <h3>Dark & Light Mode</h3>
            <p>Switch themes based on your preference anytime</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📥</div>
            <h3>Import & Export</h3>
            <p>Backup your data as CSV or import expenses from other sources</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Payment Methods</h3>
            <p>Track spending across Cash, Card, UPI, and Bank Transfers</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Add Expense</h3>
            <p>Enter title, amount, date, and category</p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Track Spending</h3>
            <p>View dashboard with category breakdown</p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Stay On Budget</h3>
            <p>Get alerts and insights on your spending</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3>100+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat-item">
          <h3>₹50L+</h3>
          <p>Tracked Expenses</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Available Anytime</p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Free Forever</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Take Control of Your Money?</h2>
        <p>Join thousands of users who are tracking their expenses smarter</p>
        <button className="btn btn-primary btn-large" onClick={onGetStarted}>
          Start Tracking Now →
        </button>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>💰 ExpenseTracker</h4>
            <p>Smart expense tracking for everyone</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 ExpenseTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
