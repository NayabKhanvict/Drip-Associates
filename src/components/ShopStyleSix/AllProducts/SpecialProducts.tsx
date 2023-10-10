"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductCard from "../ProductCard";
import data from "@/jsonData/home-1_productData/home_1.json";

const SpecialProducts = ({ specialData }: any) => {
  return (
    <div className="row">
      {specialData.map((product: any) => (
        <>
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
            <ProductCard product={product} />
          </div>
        </>
      ))}
    </div>
  );
};

export default SpecialProducts;
