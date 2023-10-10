import React from "react";
import ProductCard from "../ProductCard";

const LatestProducts = ({ latestData }: any) => {
  return (
    <>
      <div className="row">
        {latestData.map((product: any) => (
          <>
            <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
              <ProductCard product={product} />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default LatestProducts;
