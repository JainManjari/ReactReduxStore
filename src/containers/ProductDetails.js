import React, { useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productAction";
import NotFound from "./NotFound";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { reducers } = useSelector((state) => state);
  const { selectProduct } = reducers;

  const fetchProductById = async function () {
    try {
      let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.log("error in fetching product by id ", id, err);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductById();
    }
  }, [id]);

  return selectProduct ? (
    <div className="ten column wide" key={id}>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={selectProduct.image} />
          </div>
          <div className="content">
            <div className="header">{selectProduct.title}</div>
            <div className="meta price"> {selectProduct.price} $</div>
            <div className="meta ">{selectProduct.category}</div>
            <div className="meta">{selectProduct.description}</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default ProductDetails;
