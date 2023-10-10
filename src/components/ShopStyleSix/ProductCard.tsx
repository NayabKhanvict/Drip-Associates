"use client";
import { addToCart } from "@/redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/typedhooks/hooks";
import Link from "next/link";
import React, { useState } from "react";
import FormattedPrice from "../FormattedPrice/FormattedPrice";
import { toast } from "react-toastify";
import StarRating from "../Common/StarRating";

const ProductCard = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const [isActiveQuickViewModal, setActiveQuickViewModal] =
    useState<boolean>(true);
  const handleToggleQuickViewModal = () => {
    setActiveQuickViewModal(!isActiveQuickViewModal);
  };
  const [qty, setQty] = useState(1);
  const products = useAppSelector(
    (state) => state?.data?.data?.product?.products
  );
  const specificProduct = products?.find(
    (item: any) => item?.id === product?.id
  );
  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    });
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty;
    });
  };

  const addToCartHandler = (product: any) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
  };
  const cardCartHandler = (product: any) => {
    let totalPrice = product?.price;
    let quantity = 1;
    const tempProduct = {
      ...product,
      quantity,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
  };
  return (
    <>
      <div className="product-box">
        <div className="product-image">
          <Link href={`/products/${product?.id}`}>
            <img src={product?.img} alt="image" />
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
          </ul>
        </div>

        <div className="product-content">
          <h3>{product?.title}</h3>

          <div className="product-price">
            <span className="new-price">
              <FormattedPrice amount={product?.price} />
            </span>
          </div>

          <div className="rating">
            <StarRating rating={product?.rating} />
            {/* <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i> */}
          </div>

          <div className="px-5">
            <button
              className="btn btn-light d-block w-100"
              //  onClick={() => {
              //                         dispatch(
              //                           toggleCartQty({
              //                             id: product?.id,
              //                             type: "INC",
              //                           })
              //                         );
              //                       }}
              onClick={() => {
                cardCartHandler(product);
                toast.success("Product added successfully!", {
                  position: "top-right",
                  autoClose: 3000,
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
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
              product-dismiss="modal"
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
                  <img src={specificProduct?.img} alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="product-content">
                  <h3>
                    <Link href="/products/product-details/">
                      {specificProduct?.title}
                    </Link>
                  </h3>
                  <div className="price">
                    <span className="new-price">
                      <FormattedPrice amount={specificProduct?.price} />
                    </span>
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
                      <span>Availability: </span>{" "}
                      <Link href="#">In stock ({specificProduct?.stock})</Link>
                    </li>
                    <li>
                      <span>Product Type:</span>{" "}
                      <Link href="#">{specificProduct?.type}</Link>
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
                      {specificProduct?.size.map((item: string[]) => (
                        <li>
                          <Link href="#">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-add-to-cart">
                    <div className="input-counter">
                      <span className="minus-btn">
                        <i
                          className="fas fa-minus"
                          onClick={() => decreaseQty()}
                        ></i>
                      </span>
                      <input type="text" value={qty} />
                      <span className="plus-btn">
                        <i
                          className="fas fa-plus"
                          onClick={() => increaseQty()}
                        ></i>
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => {
                        addToCartHandler(specificProduct);
                        toast.success("Product added successfully!", {
                          position: "top-right",
                          autoClose: 3000,
                        });
                      }}
                    >
                      <i className="fas fa-cart-plus"></i> Add to Cart
                    </button>
                  </div>

                  <Link
                    className="view-full-info"
                    href={`/products/${product?.id}`}
                  >
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
    </>
  );
};

export default ProductCard;
