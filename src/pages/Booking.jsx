import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
  // Get restaurant from URL
  const params = new URLSearchParams(window.location.search);

  const selectedRestaurant =
    params.get("restaurant") || "";

  const [booking, setBooking] = useState({
    restaurant: selectedRestaurant,
    date: "",
    time: "",
    guests: "",
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  // Submit booking
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const bookingData = {
      restaurant: booking.restaurant,
      date: booking.date,
      time: booking.time,
      guests: Number(booking.guests),
      name: booking.name,
      phone: booking.phone,
    };

    const { error } = await supabase
      .from("bookings")
      .insert([bookingData]);

    if (error) {
      console.error(error);

      alert("Booking failed: " + error.message);

      setLoading(false);

      return;
    }

    alert("Table booked successfully!");

    // Clear form
    setBooking({
      restaurant: "",
      date: "",
      time: "",
      guests: "",
      name: "",
      phone: "",
    });

    setLoading(false);
  };

  return (
    <div className="booking">

      <h1>Book Your Table</h1>

      <p className="page-text">
        Fill in the details below to reserve your table.
      </p>

      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >

        {/* Restaurant */}

        <label>Restaurant</label>

        <select
          name="restaurant"
          value={booking.restaurant}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Restaurant
          </option>

          <option value="Spice Garden">
            Spice Garden
          </option>

          <option value="Pizza House">
            Pizza House
          </option>

          <option value="Sushi World">
            Sushi World
          </option>

          <option value="Burger Hub">
            Burger Hub
          </option>
        </select>


        {/* Date */}

        <label>Date</label>

        <input
          type="date"
          name="date"
          value={booking.date}
          onChange={handleChange}
          required
        />


        {/* Time */}

        <label>Time</label>

        <input
          type="time"
          name="time"
          value={booking.time}
          onChange={handleChange}
          required
        />


        {/* Guests */}

        <label>Number of Guests</label>

        <select
          name="guests"
          value={booking.guests}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Guests
          </option>

          <option value="1">
            1 Person
          </option>

          <option value="2">
            2 People
          </option>

          <option value="3">
            3 People
          </option>

          <option value="4">
            4 People
          </option>

          <option value="5">
            5 People
          </option>

          <option value="6">
            6 People
          </option>
        </select>


        {/* Name */}

        <label>Your Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={booking.name}
          onChange={handleChange}
          required
        />


        {/* Phone */}

        <label>Phone Number</label>

        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={booking.phone}
          onChange={handleChange}
          required
        />


        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Booking..."
            : "Book Table"}
        </button>

      </form>

    </div>
  );
}

export default Booking;
