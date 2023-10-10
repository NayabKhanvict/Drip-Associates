"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductCard from "../ShopStyleSix/ProductCard";
import { useAppSelector } from "@/typedhooks/hooks";

const ProductsCard = ({ filters }: any) => {
  const [isActiveQuickViewModal, setActiveQuickViewModal] =
    useState<boolean>(true);
  const handleToggleQuickViewModal = () => {
    setActiveQuickViewModal(!isActiveQuickViewModal);
  };
  const products = useAppSelector(
    (state) => state?.data?.data?.product?.products
  );
  const parsePriceFilter = (filterValue: any) => {
    const [min, max] = filterValue
      .split("-")
      .map((str: string) => parseInt(str.replace("$", "").trim()));
    return { minPrice: min, maxPrice: max };
  };

  const selectedPriceRange = parsePriceFilter(filters.price);
  console.log(selectedPriceRange.minPrice, selectedPriceRange.maxPrice);
  const filteredProducts =
    filters.brand === "" &&
    filters.color === "" &&
    filters.price === "" &&
    filters.size === "" &&
    filters.tags === "" &&
    filters.collections === ""
      ? products
      : products.filter((product: any) => {
          return (
            (filters.brand === "" || product.brand === filters.brand) &&
            (filters.collections === "" ||
              product.collections === filters.collections) &&
            (filters.size === "" || product.size.includes(filters.size)) &&
            (filters.color === "" || product.color.includes(filters.color)) &&
            (filters.tags === "" || product.tags.includes(filters.tags))
          );
        });

  console.log(filteredProducts, filters);
  return (
    <>
      <div className="row">
        {filteredProducts?.map((product: any) => (
          <div key={product?.id} className="col-lg-6 col-md-6 col-sm-6">
            <ProductCard product={product} />
          </div>
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

export default ProductsCard;
