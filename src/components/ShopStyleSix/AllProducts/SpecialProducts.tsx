"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductCard from "../ProductCard";
import data from "@/jsonData/home-1_productData/home_1.json";

const SpecialProducts = ({ specialData }: any) => {
  return (
    <>
      <div className="row">
        <ProductCard data={specialData} />
      </div>
    </>
  );
};

export default SpecialProducts;
