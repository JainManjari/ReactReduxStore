import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const { reducers } = useSelector((state) => state);
  const { products } = reducers.allProducts;

  const ProductDisplayList = products.map((product) => {
    const { id, title, price, category, image } = product;
    return (
      <Link to={`/product/${id}`} key={id}>
        <div className="ten column wide" key={id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price"> {price} $</div>
                <div className="meta ">{category}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return <div>{ProductDisplayList}</div>;
};

export default ProductComponent;
