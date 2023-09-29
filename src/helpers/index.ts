import { latestroduct } from "@/constant/products";

export const getProducts = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
  if (!res.ok) {
    throw new Error("Faild to fetch products");
  }
  return res.json();
};
export const getTrendingProducts = async () => {
  const res = await fetch(
    "https://fakestoreapiserver.reactbd.com/smarttrending"
  );
  if (!res.ok) {
    throw new Error("Faild to fetch products");
  }
  return res.json();
};

export const getSingleProudct = (_id: number) => {
  const item = latestroduct.find((product) => product._id === _id);
  return item;
};
