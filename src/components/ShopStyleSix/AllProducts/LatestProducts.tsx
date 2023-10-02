import React from "react";
import ProductCard from "../ProductCard";

const LatestProducts = ({ latestData }: any) => {
  return (
    <>
      <div className="row">
        <ProductCard data={latestData} />
      </div>
    </>
  );
};

export default LatestProducts;
