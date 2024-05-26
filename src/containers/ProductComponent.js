import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const {reducers} = useSelector((state) => state);
  const {products} = reducers.allProducts;
  return (
    <div className="ten column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{products[0].title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
