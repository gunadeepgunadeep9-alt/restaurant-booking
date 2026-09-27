import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="restaurant-navbar">

      <div className="restaurant-logo">
        <span>🍽️</span>

        <div>
          <h2>Foodie Table</h2>
          <small>Restaurant Booking</small>
        </div>
      </div>

      <div className="restaurant-nav-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/restaurants"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Restaurants
        </NavLink>

        <NavLink
          to="/booking"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Book Table
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          History
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;