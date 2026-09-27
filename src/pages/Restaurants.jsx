import { Link } from "react-router-dom";

function Restaurants() {
  const restaurants = [
    {
      id: 1,
      name: "Spice Garden",
      type: "Indian",
      location: "Bengaluru",
      rating: "4.5 ⭐",
      icon: "🍛",
    },
    {
      id: 2,
      name: "Pizza House",
      type: "Italian",
      location: "Bengaluru",
      rating: "4.3 ⭐",
      icon: "🍕",
    },
    {
      id: 3,
      name: "Sushi World",
      type: "Japanese",
      location: "Bengaluru",
      rating: "4.6 ⭐",
      icon: "🍣",
    },
    {
      id: 4,
      name: "Burger Hub",
      type: "Fast Food",
      location: "Bengaluru",
      rating: "4.2 ⭐",
      icon: "🍔",
    },
  ];

  return (
    <div className="restaurants">

      <h1>Find Your Restaurant</h1>

      <p className="page-text">
        Choose your favourite restaurant and book a table easily.
      </p>

      <div className="restaurant-grid">

        {restaurants.map((restaurant) => (
          <div
            className="restaurant-card"
            key={restaurant.id}
          >

            <div className="restaurant-icon">
              {restaurant.icon}
            </div>

            <h2>{restaurant.name}</h2>

            <p>{restaurant.type}</p>

            <p>📍 {restaurant.location}</p>

            <p>{restaurant.rating}</p>

            <Link
              to={`/booking?restaurant=${encodeURIComponent(
                restaurant.name
              )}`}
              className="card-button"
            >
              Book Table
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Restaurants;