"use client";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }: any) => {
  console.log(data);
  return (
    <>
      {data.map((data: any) => (
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="product-box">
            <div className="product-image">
              <Link href="/products/product-details/">
                <img src={data.img} alt="image" />
              </Link>

              <ul>
                <li>
                  <button
                    type="button"
                    //   onClick={handleToggleQuickViewModal}
                    title="Quick View"
                  >
                    <i className="far fa-eye"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                </li>
              </ul>
            </div>

            <div className="product-content">
              <h3>
                <Link href="/products/product-details/">{data.title}</Link>
              </h3>

              <div className="product-price">
                <span className="new-price">$191.00</span>
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <div className="px-5">
                <button className="btn btn-light d-block w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
