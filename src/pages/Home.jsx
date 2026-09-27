import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">

      <div className="hero">
        <p className="small-title">WELCOME TO FOODIE TABLE</p>

        <h1>
          Book Your Perfect
          <span> Restaurant Table</span>
        </h1>

        <p className="hero-text">
          Discover great restaurants and reserve your table
          quickly and easily.
        </p>

        <Link to="/booking" className="main-button">
          Book a Table
        </Link>
      </div>

      <div className="features">

        <div className="feature-card">
          <div className="feature-icon">🍽️</div>
          <h3>Choose Restaurant</h3>
          <p>Select your favorite restaurant.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📅</div>
          <h3>Select Date & Time</h3>
          <p>Choose when you want to dine.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🪑</div>
          <h3>Select Table</h3>
          <p>Choose an available table.</p>
        </div>

      </div>

    </main>
  );
}

export default Home;