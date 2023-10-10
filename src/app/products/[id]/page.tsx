"use client";
import React from "react";
import Facility from "@/components/Common/Facility";
import Breadcrumb from "@/components/Common/Breadcrumb";
import RelatedProducts from "@/components/ProductDetails/RelatedProducts";
import ProductImage from "@/components/ProductDetails/ProductImage";
import ProductContent from "@/components/ProductDetails/ProductContent";
import DetailsTab from "@/components/ProductDetails/DetailsTab";
import { useAppSelector } from "@/typedhooks/hooks";
import { Product } from "@/types";

const ProductDetails = ({ params }: { params: { id: number } }) => {
  const products = useAppSelector(
    (state) => state?.data?.data?.product?.products
  );
  const specificProduct = products?.find(
    (item: Product) => item?.id === Number(params.id)
  );
  return (
    <>
      <Breadcrumb title="Product Details" />

      <div className="products-details-area pt-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <ProductImage specificProduct={specificProduct} />
            </div>

            <div className="col-lg-6 col-md-6">
              <ProductContent specificProduct={specificProduct} />
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
