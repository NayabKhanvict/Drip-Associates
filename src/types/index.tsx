export interface DetailImg {
  _id: number;
  image_1?: string;
}
export interface Product {
  _id: number;
  title: string;
  description: string;
  price: number;
  old_price: number;
  category: string;
  image: string;
  imgHover: string;
  gender: string;
  type: string;
  detailImg: DetailImg[];
  rating: number;
  quantity: number;
}

export interface BannerData {
  offer: string;
  title: string;
  description: string;
  Image: string;
}
