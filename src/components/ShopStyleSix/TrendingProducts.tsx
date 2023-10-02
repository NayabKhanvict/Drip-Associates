"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";

const TrendingProducts = ({ data }: any) => {
  const [isActiveQuickViewModal, setActiveQuickViewModal] =
    useState<boolean>(true);
  const handleToggleQuickViewModal = () => {
    setActiveQuickViewModal(!isActiveQuickViewModal);
  };
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

      {/* Product Quick View Modal */}
      <div
        className={`modal fade productQuickView ${
          isActiveQuickViewModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleToggleQuickViewModal}
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="productQuickView-image">
                  <img src="/images/quick-view-img.jpg" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="product-content">
                  <h3>
                    <Link href="/products/product-details/">
                      Criss-cross V neck bodycon
                    </Link>
                  </h3>

                  <div className="price">
                    <span className="new-price">$230</span>
                  </div>

                  <div className="product-review">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a className="rating-count" href="#">
                      3 reviews
                    </a>
                  </div>

                  <ul className="product-info">
                    <li>
                      <span>Vendor:</span> <a href="#">Lereve</a>
                    </li>
                    <li>
                      <span>Availability:</span>{" "}
                      <a href="#">In stock (7 items)</a>
                    </li>
                    <li>
                      <span>Product Type:</span> <a href="#">T-Shirt</a>
                    </li>
                  </ul>

                  <div className="product-color-switch">
                    <h4>Color:</h4>
                    <ul>
                      <li>
                        <a title="Black" className="color-black" href="#"></a>
                      </li>
                      <li>
                        <a title="White" className="color-white" href="#"></a>
                      </li>
                      <li className="active">
                        <a title="Green" className="color-green" href="#"></a>
                      </li>
                      <li>
                        <a
                          title="Yellow Green"
                          className="color-yellowgreen"
                          href="#"
                        ></a>
                      </li>
                      <li>
                        <a title="Teal" className="color-teal" href="#"></a>
                      </li>
                    </ul>
                  </div>

                  <div className="product-size-wrapper">
                    <h4>Size:</h4>
                    <ul>
                      <li>
                        <a href="#">XS</a>
                      </li>
                      <li className="active">
                        <a href="#">S</a>
                      </li>
                      <li>
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a href="#">XL</a>
                      </li>
                      <li>
                        <a href="#">XXL</a>
                      </li>
                    </ul>
                  </div>

                  <div className="product-add-to-cart">
                    <div className="input-counter">
                      <span className="minus-btn">
                        <i className="fas fa-minus"></i>
                      </span>
                      <input type="text" min="1" max="10" defaultValue="1" />
                      <span className="plus-btn">
                        <i className="fas fa-plus"></i>
                      </span>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-cart-plus"></i> Add to Cart
                    </button>
                  </div>

                  <Link className="view-full-info" href="#">
                    View full info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span
          className="close-modal"
          onClick={handleToggleQuickViewModal}
        ></span>
      </div>
      {/* End Product Quick View Modal */}
    </>
  );
};

export default TrendingProducts;
