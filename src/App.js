import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/About";
import Activity from "./Components/Activity";
import Contact from "./Components/Contact";
import "./App.css";


export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">My Portfolio</div>

        <nav className="nav">
          <NavLink to="/" className="navlink" end>
            Home
          </NavLink>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
          <NavLink to="/activity" className="navlink">
            Activities
          </NavLink>
          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
</nav>
      </header>

      <main className="main" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Your Name</small>
      </footer>
    </div>
  );
}