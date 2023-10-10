"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useAppDispatch } from "@/typedhooks/hooks";
import { resetCart } from "@/redux/slices/cartSlice";

const Success = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetCart());
  }, []);

  return (
    <div className="succes-container">
      <div className="success-content">
        <h1 className="h1">Your Payment Accepted by Drip-Associate.com</h1>
        <p>Now you can view your Orders or continue Shopping with us</p>
      </div>
      <div className="success-btn">
        <Link href="/" className="btn btn-light">
          Continue Shopping
        </Link>
        <Link href="/myorder" className="btn btn-light">
          View Order
        </Link>
      </div>
    </div>
  );
};

export default Success;
