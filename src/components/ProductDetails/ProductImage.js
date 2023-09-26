import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ProductImage = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="product-img-slider">
        <SwiperSlide>
          <img src="/images/product-details/1.jpg" className="w-100" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/product-details/2.jpg" className="w-100" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/product-details/3.jpg" className="w-100" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductImage;
