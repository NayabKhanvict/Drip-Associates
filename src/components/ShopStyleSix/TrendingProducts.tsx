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
            {trendingproducts.map((product: any) => (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
                  <ProductCard product={product} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
