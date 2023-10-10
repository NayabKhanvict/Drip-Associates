export interface Product {
  id: number;
  title: string;
  description: string;
  colors: string[];
  imghover: string;
  img: string;
  images: string[];
  company: string;
  price: number;
  oldprice: number;
  category: string;
  type: string;
  rating: number;
  stock: number;
  quantity: number;
  gender: string;
  size: string[];
}

export interface BannerData {
  offer: string;
  title: string;
  description: string;
  Image: string;
}
