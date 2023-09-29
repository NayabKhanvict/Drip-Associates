"use client";
import React from "react";
import Facility from "@/components/Common/Facility";
import Breadcrumb from "@/components/Common/Breadcrumb";
import RelatedProducts from "@/components/ProductDetails/RelatedProducts";
import ProductImage from "@/components/ProductDetails/ProductImage";
import ProductContent from "@/components/ProductDetails/ProductContent";
import DetailsTab from "@/components/ProductDetails/DetailsTab";

const ProductDetails = ({ params }: { params: { id: number } }) => {
  console.log(typeof params.id);

  return (
    <>
      <Breadcrumb title="Product Details" />

      <div className="products-details-area pt-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <ProductImage />
            </div>

            <div className="col-lg-6 col-md-6">
              <ProductContent />
            </div>
          </div>

          {/* DetailsTab */}
          <DetailsTab />
        </div>

        <RelatedProducts />

        <Facility />
      </div>
    </>
  );
};

export default ProductDetails;
