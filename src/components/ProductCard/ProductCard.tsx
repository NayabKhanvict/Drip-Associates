"use client";
import { Product } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import FormattedPrice from "../FormatedPrice/FormatedPrice";

const ProductCard = ({ product }: any) => {
  const [isActiveQuickViewModal, setActiveQuickViewModal] =
    useState<boolean>(false);
  const handleToggleQuickViewModal = () => {
    setActiveQuickViewModal(!isActiveQuickViewModal);
  };
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6" key={product._id}>
        <div className="single-product-box">
          <div className="product-image">
            <Link href={`/products/${product._id}`}>
              <img src={product.image} alt="image" />
              <img src={product.imgHover} alt="image" />
            </Link>

            <ul>
              <li>
                <button
                  type="button"
                  title="Quick View"
                  onClick={handleToggleQuickViewModal}
                >
                  <i className="far fa-eye"></i>
                </button>
              </li>
              <li>
                <button type="button" title="Add to Wishlist">
                  <i className="far fa-heart"></i>
                </button>
              </li>
              <li>
                <button type="button" title="Add to Compare">
                  <i className="fas fa-sync"></i>
                </button>
              </li>
            </ul>
          </div>

          <div className="product-content">
            <h3>
              <Link href="/products/product-details/">{product.title}</Link>
            </h3>

            <div className="product-price">
              <span className="new-price">
                <FormattedPrice amount={product.price} />
              </span>
            </div>

            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>

            <button className="btn btn-light">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
