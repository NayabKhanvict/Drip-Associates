import React from "react";
import ProductCard from "./ProductCard";

const TrendingProducts = ({ data }: any) => {
  const trendingproducts = data.products.trending_products;
  return (
    <>
      <div className="trending-products-area pb-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Trending Products
            </h2>
          </div>

          <div className="row">
            <ProductCard data={trendingproducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
