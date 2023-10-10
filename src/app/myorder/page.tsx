import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import OrderContent from "@/components/MyOrder/OrderCart";

const Cart = () => {
  return (
    <>
      <Breadcrumb title="order" />
      <OrderContent />
    </>
  );
};

export default Cart;
