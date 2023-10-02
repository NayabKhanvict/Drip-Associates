import React from "react";
import ProductCard from "./ProductCard";

const BestSeller = ({ data }: any) => {
  const bestSellersproduct = data.products.bestSellers_product;
  return (
    <>
      <div className="best-sellers-area pb-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Best Sellers
            </h2>
          </div>

          <div className="row">
            <ProductCard data={bestSellersproduct} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
