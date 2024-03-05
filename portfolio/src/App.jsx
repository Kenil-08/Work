// App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          Projects
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
