import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Booking from "./pages/Booking";
import History from "./pages/History";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/restaurants"
          element={<Restaurants />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/history"
          element={<History />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;