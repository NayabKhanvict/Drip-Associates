"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Facility from "@/components/Common/Facility";
import LeftSidebar from "@/components/Products/LeftSidebar";
import ProductsFilterOptions from "@/components/Common/ProductsFilterOptions";
import OfferArea from "@/components/ShopStyleOne/OfferArea";
import ProductsCard from "@/components/Products/ProductsCard";

const Products = () => {
  const [filters, setFilters] = useState({
    brand: "",
    color: "",
    price: "",
    collections: "",
    size: "",
    tags: "",
  });
  return (
    <>
      <Breadcrumb title="Products" />

      <div className="products-collections-area ptb-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Products
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12">
              <LeftSidebar filters={filters} setFilters={setFilters} />
            </div>

            <div className="col-lg-8 col-md-12">
              <ProductsFilterOptions />

              <ProductsCard filters={filters} />
            </div>
          </div>
        </div>
      </div>

      <OfferArea />

      <Facility />
    </>
  );
};

export default Products;
