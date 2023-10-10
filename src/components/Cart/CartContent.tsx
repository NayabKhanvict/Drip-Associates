"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/typedhooks/hooks";
import FormattedPrice from "../FormattedPrice/FormattedPrice";
import {
  deleteProduct,
  resetCart,
  getCartTotal,
  toggleCartQty,
} from "@/redux/slices/cartSlice";
import { toast } from "react-toastify";

const CartContent = () => {
  const dispatch = useAppDispatch();
  const {
    cartData: products,
    totalItems,
    totalAmount,
  } = useAppSelector((state) => state?.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [useAppSelector((state) => state?.cart)]);

  if (products?.length > 0) {
    return (
      <>
        <div className="cart-area ptb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <form>
                  <div className="cart-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Name</th>
                          <th scope="col">Unit Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>

                      <tbody>
                        {products.map((product: any) => (
                          <tr>
                            <td className="product-thumbnail">
                              <Link href="#">
                                <img src={product?.img} alt="item" />
                              </Link>
                            </td>

                            <td className="product-name">
                              <Link href="#">{product?.title}</Link>
                              <ul>
                                <li>
                                  Color: <strong>Light Blue</strong>
                                </li>
                                <li>
                                  Size: <strong>XL</strong>
                                </li>
                                <li>
                                  Material: <strong>Cotton</strong>
                                </li>
                              </ul>
                            </td>

                            <td className="product-price">
                              <span className="unit-amount">
                                <FormattedPrice amount={product?.price} />
                              </span>
                            </td>

                            <td className="product-quantity">
                              <div className="input-counter">
                                <span className="minus-btn">
                                  <i
                                    className="fas fa-minus"
                                    onClick={() => {
                                      dispatch(
                                        toggleCartQty({
                                          id: product?.id,
                                          type: "DEC",
                                        })
                                      );
                                    }}
                                  ></i>
                                </span>
                                <input type="text" value={product?.quantity} />
                                <span className="plus-btn">
                                  <i
                                    className="fas fa-plus"
                                    onClick={() => {
                                      dispatch(
                                        toggleCartQty({
                                          id: product?.id,
                                          type: "INC",
                                        })
                                      );
                                    }}
                                  ></i>
                                </span>
                              </div>
                            </td>

                            <td className="product-subtotal">
                              <span className="subtotal-amount">
                                <FormattedPrice
                                  amount={
                                    product?.totalPrice
                                      ? product?.totalPrice
                                      : product?.price
                                  }
                                />
                              </span>

                              <Link
                                href="#"
                                className="remove"
                                onClick={() => {
                                  dispatch(deleteProduct(product.id));
                                  toast.success(
                                    "Product delete successfully!",
                                    {
                                      position: "top-right",
                                      autoClose: 3000,
                                    }
                                  );
                                }}
                              >
                                <i className="far fa-trash-alt"></i>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="cart-buttons">
                    <div className="row align-items-center">
                      <div className="col-lg-4 col-md-4">
                        <div className="continue-shopping-box">
                          <Link href="/" className="btn btn-light">
                            Continue Shopping
                          </Link>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 text-right">
                        <Link
                          href="#"
                          className="btn btn-primary"
                          onClick={() => {
                            dispatch(resetCart());
                            toast.success("All Product delete successfully!", {
                              position: "top-right",
                              autoClose: 3000,
                            });
                          }}
                        >
                          REST Cart
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="cart-totals">
                    <h3>Cart Totals</h3>

                    <ul>
                      <li>
                        Subtotal{" "}
                        <span>
                          <FormattedPrice amount={totalAmount} />
                        </span>
                      </li>
                      <li>
                        Totalitem <span>{totalItems}</span>
                      </li>
                      <li>
                        Shipping{" "}
                        <span>
                          <FormattedPrice amount={20} />
                        </span>
                      </li>
                      <li>
                        Total
                        <span>
                          <b>
                            <FormattedPrice amount={totalAmount + 20} />
                          </b>
                        </span>
                      </li>
                    </ul>
                    <Link href="/checkout" className="btn btn-light">
                      Proceed to Checkout
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "30px", fontWeight: "600" }}>
          NO Product Is Present Yet!
        </h1>
        <Link href="/" className="btn btn-light">
          Continue Shopping
        </Link>
      </div>
    );
  }
};

export default CartContent;
