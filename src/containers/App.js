import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./ProductListing";
import ProductDetails from "./ProductDetails";
import NotFound from "./NotFound";
import UseEffect from "./UseEffect";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="useEffect" element={<UseEffect />} />
        <Route path="*" element={<NotFound />} />
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
