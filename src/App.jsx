import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Cats from "./pages/Cats";
import CatDetails from "./pages/CatDetails";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <NavigationBar />

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/cats/:id" element={<CatDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;