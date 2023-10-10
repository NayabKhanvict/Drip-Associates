"use client";
import getStipePromise from "@/lib/strip";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/typedhooks/hooks";
import FormattedPrice from "../FormattedPrice/FormattedPrice";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { orderInformation, saveOrder } from "@/redux/slices/orderSlice";
import { resetCart } from "@/redux/slices/cartSlice";
const CheckoutForm = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>("");
  const { cartData: products, totalAmount } = useAppSelector(
    (state) => state?.cart
  );
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    email: "",
    phone: "",
    notes: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const {
      country,
      firstName,
      lastName,
      companyName,
      address,
      city,
      state,
      postcode,
      email,
      phone,
      notes,
    } = formData;
    if (
      !country ||
      !firstName ||
      !lastName ||
      !companyName ||
      !address ||
      !city ||
      !state ||
      !postcode ||
      !email ||
      !phone
    ) {
      setError("All fields having * are necessary");
      return;
    }
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: products,
        email: session?.user?.email,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      await dispatch(saveOrder(products, data.id));
      await dispatch(orderInformation(formData));
      stripe?.redirectToCheckout({ sessionId: data.id });
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };
  if (products.length > 0) {
    return (
      <>
        <div className="checkout-area ptb-60">
          <div className="container">
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="billing-details">
                    <h3 className="title">Billing Details</h3>

                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Country <span className="required">*</span>
                          </label>

                          <div className="select-box">
                            <select
                              className="form-control"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                            >
                              <option value="5">United Arab Emirates</option>
                              <option value="1">China</option>
                              <option value="2">United Kingdom</option>
                              <option value="0">Germany</option>
                              <option value="3">France</option>
                              <option value="4">Japan</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            First Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Last Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-6">
                        <div className="form-group">
                          <label>
                            Address <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-6">
                        <div className="form-group">
                          <label>
                            Town / City <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            State / County <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* <div className="col-lg-12 col-md-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="create-an-account"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="create-an-account"
                          >
                            Create an account?
                          </label>
                        </div>
                      </div> */}

                      {/* <div className="col-lg-12 col-md-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="ship-different-address"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="ship-different-address"
                          >
                            Ship to a different address?
                          </label>
                        </div>
                      </div> */}

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="notes"
                            id="notes"
                            placeholder="Order Notes"
                            className="form-control"
                            value={formData.notes}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="order-details">
                    <h3 className="title">Your Order</h3>

                    <div className="order-table table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>

                        <tbody>
                          {products.map((product: any) => (
                            <tr key={product?.title}>
                              <td className="product-name">
                                <a href="#">{product?.title}</a>
                              </td>

                              <td className="product-total">
                                <span className="subtotal-amount">
                                  <FormattedPrice
                                    amount={product?.totalPrice}
                                  />
                                </span>
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td className="order-subtotal">
                              <span>Cart Subtotal</span>
                            </td>

                            <td className="order-subtotal-price">
                              <span className="order-subtotal-amount">
                                <FormattedPrice amount={totalAmount} />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="order-shipping">
                              <span>Shipping</span>
                            </td>

                            <td className="shipping-price">
                              <span>
                                <FormattedPrice amount={20} />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="total-price">
                              <span>Order Total</span>
                            </td>

                            <td className="product-subtotal">
                              <span className="subtotal-amount">
                                <FormattedPrice amount={totalAmount + 20} />
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="payment-method">
                      <p>
                        <input
                          type="radio"
                          id="direct-bank-transfer"
                          name="radio-group"
                          defaultChecked
                        />
                        <label htmlFor="direct-bank-transfer">
                          Direct Bank Transfer
                        </label>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                      <p>
                        <input type="radio" id="paypal" name="radio-group" />
                        <label htmlFor="paypal">PayPal</label>
                      </p>
                      <p>
                        <input
                          type="radio"
                          id="cash-on-delivery"
                          name="radio-group"
                        />
                        <label htmlFor="cash-on-delivery">
                          Cash on Delivery
                        </label>
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary order-btn"
                      onClick={handleCheckout}
                    >
                      Place Order
                    </button>
                    <div style={{ color: "red" }}>{error}</div>
                  </div>
                </div>
              </div>
            </form>
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
        <h1 style={{ fontSize: "30px", fontWeight: "600", width: "90" }}>
          Cart is Empty, please add Product to Checkout
        </h1>
        <Link href="/" className="btn btn-light">
          Continue Shopping
        </Link>
      </div>
    );
  }
};

export default CheckoutForm;
