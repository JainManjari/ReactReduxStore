import React from "react";
import ProductCard from "./ProductComponent";

const ProductListing = () => {
  return (
    <div className="ui grid container" style={{marginTop:50}}>
      <h1>Product Listing</h1>
      <ProductCard />
    </div>
  );
};

export default ProductListing;
