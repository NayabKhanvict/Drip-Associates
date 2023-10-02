"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const BannerSlider = ({ bannerData }: any) => {
  console.log(bannerData);
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination]}
        className="home-slides"
      >
        {bannerData.map((data: any) => (
          <SwiperSlide>
            <div
              className="main-banner"
              style={{
                backgroundImage: `url(${data.Image})`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content">
                      <span>{data.offer}</span>
                      <h1>{data.title}</h1>
                      <p>{data.description}</p>

                      <Link href="#" className="btn btn-primary">
                        Shop Women's
                      </Link>

                      <Link href="#" className="btn btn-light">
                        Shop Men's
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/main-banner-image/banner-new-bg2.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <span>New Inspiration 2020!</span>
                    <h1>Winter Sun Glasses</h1>
                    <p>Trending from men and women style collection</p>

                    <Link href="#" className="btn btn-primary">
                      Shop Women's
                    </Link>

                    <Link href="#" className="btn btn-light">
                      Shop Men's
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/main-banner-image/banner-new-bg3.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <span>New Inspiration 2020</span>
                    <h1>Travel Sun Glasses</h1>
                    <p>Up To 30% OFF Select Styles</p>

                    <Link href="#" className="btn btn-primary">
                      Shop Women's
                    </Link>

                    <Link href="#" className="btn btn-light">
                      Shop Men's
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default BannerSlider;
