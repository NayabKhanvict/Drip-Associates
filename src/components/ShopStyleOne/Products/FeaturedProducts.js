"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard/ProductCard";
import data from "../../../jsonData/home-1_productData/home_1.json";

const FeaturedProducts = () => {
  const [isActiveQuickViewModal, setActiveQuickViewModal] = useState("false");
  const handleToggleQuickViewModal = () => {
    setActiveQuickViewModal(!isActiveQuickViewModal);
  };
  const featuredProduct = data.products.featured_products;
  return (
    <>
      <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
        {featuredProduct.map((product) => (
          <ProductCard product={product} />
        ))}
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
                    <Link className="rating-count" href="#">
                      3 reviews
                    </Link>
                  </div>

                  <ul className="product-info">
                    <li>
                      <span>Vendor:</span> <Link href="#">Lereve</Link>
                    </li>
                    <li>
                      <span>Availability:</span>{" "}
                      <Link href="#">In stock (7 items)</Link>
                    </li>
                    <li>
                      <span>Product Type:</span> <Link href="#">T-Shirt</Link>
                    </li>
                  </ul>

                  <div className="product-color-switch">
                    <h4>Color:</h4>
                    <ul>
                      <li>
                        <Link
                          title="Black"
                          className="color-black"
                          href="#"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          title="White"
                          className="color-white"
                          href="#"
                        ></Link>
                      </li>
                      <li className="active">
                        <Link
                          title="Green"
                          className="color-green"
                          href="#"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          title="Yellow Green"
                          className="color-yellowgreen"
                          href="#"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          title="Teal"
                          className="color-teal"
                          href="#"
                        ></Link>
                      </li>
                    </ul>
                  </div>

                  <div className="product-size-wrapper">
                    <h4>Size:</h4>
                    <ul>
                      <li>
                        <Link href="#">XS</Link>
                      </li>
                      <li className="active">
                        <Link href="#">S</Link>
                      </li>
                      <li>
                        <Link href="#">M</Link>
                      </li>
                      <li>
                        <Link href="#">XL</Link>
                      </li>
                      <li>
                        <Link href="#">XXL</Link>
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

export default FeaturedProducts;
