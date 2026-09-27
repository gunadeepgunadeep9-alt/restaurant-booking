import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function History() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get bookings from Supabase
  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Could not load bookings");
    } else {
      setBookings(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Delete booking
  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Do you want to delete this booking?"
    );

    if (!confirmDelete) {
      return;
    }

    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", id);

    if (error) {
      alert("Could not delete booking");
      console.error(error);
      return;
    }

    // Remove from screen
    setBookings(
      bookings.filter((booking) => booking.id !== id)
    );
  };

  return (
    <div className="history">

      <h1>Booking History</h1>

      <p className="page-text">
        View all your restaurant table bookings.
      </p>

      {loading ? (

        <div className="empty-box">
          <h2>Loading...</h2>
        </div>

      ) : bookings.length === 0 ? (

        <div className="empty-box">

          <div>🍽️</div>

          <h2>No Bookings Yet</h2>

          <p>
            Your restaurant bookings will appear here.
          </p>

        </div>

      ) : (

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Restaurant</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr key={booking.id}>

                  <td>{booking.restaurant}</td>

                  <td>{booking.date}</td>

                  <td>{booking.time}</td>

                  <td>{booking.guests}</td>

                  <td>{booking.name}</td>

                  <td>{booking.phone}</td>

                  <td>
                    <button
                      className="history-button"
                      onClick={() =>
                        deleteBooking(booking.id)
                      }
                    >
                      Delete
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default History;