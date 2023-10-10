import { NextResponse } from "next/server";
import product from "@/jsonData/all-product/all-product.json";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Product fatched successfully",
      success: true,
      product,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Product loading error",
      },
      {
        status: 500,
      }
    );
  }
};
