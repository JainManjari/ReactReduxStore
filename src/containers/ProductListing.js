import React, { useEffect } from "react";
import axios from "axios";

import ProductCard from "./ProductComponent";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async function () {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (err) {
      console.log("error in fetching products", err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container" style={{ marginTop: 50 }}>
      <h1>Product Listing</h1>
      <ProductCard />
    </div>
  );
};

export default ProductListing;
