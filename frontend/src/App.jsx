import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import ForBrands from "./pages/ForBrands";

export default function App() {
  return (
    <Routes>
      <Route path="/"        element={<Home />} />
      <Route path="/about"   element={<About />} />
      <Route path="/events"  element={<Events />} />
      <Route path="/brands"  element={<ForBrands />} />
    </Routes>
  );
}
