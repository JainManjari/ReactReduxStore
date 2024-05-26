import React, { useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productAction";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);
  const fetchProductById = async function () {
    try {
      let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.log("error in fetching product by id ", id, err);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, [id]);

  return <h1>Product Details</h1>;
};

export default ProductDetails;
