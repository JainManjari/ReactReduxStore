import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;

/**
 *
 * npm install --save react-router-dom
 * npm install --save redux react-redux
 * npm install @reduxjs/toolkit
 * npm install axios
 */
