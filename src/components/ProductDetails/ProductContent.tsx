"use client";
import React, { useState } from "react";
import Link from "next/link";
import { addToCart } from "@/redux/slices/cartSlice";
import { useAppDispatch } from "@/typedhooks/hooks";
import FormattedPrice from "../FormattedPrice/FormattedPrice";
import { toast } from "react-toastify";

const ProductContent = ({ specificProduct }: any) => {
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState(1);
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

  return (
    <>
      <div className="product-details-content">
        <h3>{specificProduct?.title}</h3>

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
          <Link href="#" className="rating-count">
            3 reviews
          </Link>
        </div>

        <p>{specificProduct?.description}</p>

        <ul className="product-info">
          <li>
            <span>Vendor:</span> <Link href="#">Lereve</Link>
          </li>
          <li>
            <span>Availability: </span>
            <Link href="#">In stock ({specificProduct?.stock})</Link>
          </li>
          <li>
            <span>Product Type: </span>
            <Link href="#">{specificProduct?.type}</Link>
          </li>
        </ul>

        <div className="product-color-switch">
          <h4>Color:</h4>

          <ul>
            <li>
              <Link href="#" title="Black" className="color-black"></Link>
            </li>
            <li>
              <Link href="#" title="White" className="color-white"></Link>
            </li>
            <li className="active">
              <Link href="#" title="Green" className="color-green"></Link>
            </li>
            <li>
              <Link
                href="#"
                title="Yellow Green"
                className="color-yellowgreen"
              ></Link>
            </li>
            <li>
              <Link href="#" title="Teal" className="color-teal"></Link>
            </li>
          </ul>
        </div>

        <div className="product-size-wrapper">
          <h4>Size:</h4>

          <ul>
            {specificProduct?.size?.map((item: string[]) => (
              <li>
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="product-info-btn">
          <Link href="#">
            <i className="fas fa-crop"></i> Size guide
          </Link>
          <Link href="#">
            <i className="fas fa-truck"></i> Shipping
          </Link>

          <Link href="#">
            <i className="far fa-envelope"></i> Ask about this product
          </Link>
        </div>

        <div className="product-add-to-cart">
          <div className="input-counter">
            <span className="minus-btn">
              <i className="fas fa-minus" onClick={() => decreaseQty()}></i>
            </span>
            <input type="text" value={qty} />
            <span className="plus-btn">
              <i className="fas fa-plus" onClick={() => increaseQty()}></i>
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

        <div className="wishlist-compare-btn">
          <button className="btn btn-light">
            <i className="far fa-heart"></i> Add to Wishlist
          </button>

          <Link href="#" className="btn btn-light">
            <i className="fas fa-balance-scale"></i> Add to Compare
          </Link>
        </div>

        <div className="buy-checkbox-btn">
          <div className="item">
            <input className="inp-cbx" id="cbx" type="checkbox" />
            <label className="cbx" htmlFor="cbx">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>I agree with the terms and conditions</span>
            </label>
          </div>

          <div className="item">
            <Link href="#" className="btn btn-primary">
              Buy it now!
            </Link>
          </div>
        </div>

        <div className="custom-payment-options">
          <span>Guaranteed safe checkout:</span>

          <div className="payment-methods">
            <Link href="#">
              <img src="/images/payment-image/1.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/2.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/3.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/4.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/5.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/6.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/7.svg" alt="image" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
