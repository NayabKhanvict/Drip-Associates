import React from "react";
import Link from "next/link";
import data from "@/jsonData/home-10_productData/home-10.json";
import ProductCard from "../ShopStyleSix/ProductCard";

const ProductsFourGrid = () => {
  const trendingproducts = data.products.trending_products;
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <ProductCard data={trendingproducts} />
        </div>

        {/* <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-product-box">
            <div className="product-image">
              <Link href="/products/product-details/">
                <img src="/images/img2.jpg" alt="image" />
                <img src="/images/img-hover2.jpg" alt="image" />
              </Link>

              <ul>
                <li>
                  <button
                    type="button"
                    title="Quick View"
                    onClick={handleToggleQuickViewModal}
                  >
                    <i className="far fa-eye"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Compare">
                    <i className="fas fa-sync"></i>
                  </button>
                </li>
              </ul>
            </div>

            <div className="product-content">
              <h3>
                <Link href="/products/product-details/">
                  Neck empire sleeve t-shirts
                </Link>
              </h3>

              <div className="product-price">
                <span className="old-price">$400.00</span>
                <span className="new-price">$300.00</span>
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <button className="btn btn-light">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-product-box">
            <div className="product-image">
              <Link href="/products/product-details/">
                <img src="/images/img3.jpg" alt="image" />
                <img src="/images/img-hover3.jpg" alt="image" />
              </Link>

              <ul>
                <li>
                  <button
                    type="button"
                    title="Quick View"
                    onClick={handleToggleQuickViewModal}
                  >
                    <i className="far fa-eye"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Compare">
                    <i className="fas fa-sync"></i>
                  </button>
                </li>
              </ul>
            </div>

            <div className="product-content">
              <h3>
                <Link href="/products/product-details/">
                  Mermaid pencil midi lace
                </Link>
              </h3>

              <div className="product-price">
                <span className="new-price">$166.00</span>
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <button className="btn btn-light">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-product-box">
            <div className="product-image">
              <Link href="/products/product-details/">
                <img src="/images/img4.jpg" alt="image" />
                <img src="/images/img-hover4.jpg" alt="image" />
              </Link>

              <ul>
                <li>
                  <button
                    type="button"
                    title="Quick View"
                    onClick={handleToggleQuickViewModal}
                  >
                    <i className="far fa-eye"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Compare">
                    <i className="fas fa-sync"></i>
                  </button>
                </li>
              </ul>
            </div>

            <div className="product-content">
              <h3>
                <Link href="/products/product-details/">
                  Criss-cross V neck bodycon
                </Link>
              </h3>

              <div className="product-price">
                <span className="new-price">$200.00</span>
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <button className="btn btn-light">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-product-box">
            <div className="product-image">
              <Link href="/products/product-details/">
                <img src="/images/img5.jpg" alt="image" />
                <img src="/images/img-hover5.jpg" alt="image" />
              </Link>

              <ul>
                <li>
                  <button
                    type="button"
                    title="Quick View"
                    onClick={handleToggleQuickViewModal}
                  >
                    <i className="far fa-eye"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Compare">
                    <i className="fas fa-sync"></i>
                  </button>
                </li>
              </ul>
            </div>

            <div className="product-content">
              <h3>
                <Link href="/products/product-details/">
                  The cosmic cornucopia
                </Link>
              </h3>

              <div className="product-price">
                <span className="new-price">$150.00</span>
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <button className="btn btn-light">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-product-box">
            <div className="product-image">
              <Link href="/products/product-details/">
                <img src="/images/img6.jpg" alt="image" />
                <img src="/images/img-hover6.jpg" alt="image" />
              </Link>

              <ul>
                <li>
                  <button
                    type="button"
                    title="Quick View"
                    onClick={handleToggleQuickViewModal}
                  >
                    <i className="far fa-eye"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Compare">
                    <i className="fas fa-sync"></i>
                  </button>
                </li>
              </ul>
            </div>

            <div className="product-content">
              <h3>
                <Link href="/products/product-details/">Tenku remastered</Link>
              </h3>

              <div className="product-price">
                <span className="new-price">$177.00</span>
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <button className="btn btn-light">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-product-box">
            <div className="product-image">
              <Link href="/products/product-details/">
                <img src="/images/img7.jpg" alt="image" />
                <img src="/images/img-hover7.jpg" alt="image" />
              </Link>

              <ul>
                <li>
                  <button
                    type="button"
                    title="Quick View"
                    onClick={handleToggleQuickViewModal}
                  >
                    <i className="far fa-eye"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Compare">
                    <i className="fas fa-sync"></i>
                  </button>
                </li>
              </ul>
            </div>

            <div className="product-content">
              <h3>
                <Link href="/products/product-details/">
                  Women's sherpa lined hoodie
                </Link>
              </h3>

              <div className="product-price">
                <span className="old-price">$300.00</span>
                <span className="new-price">$299.00</span>
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <button className="btn btn-light">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-product-box">
            <div className="product-image">
              <Link href="/products/product-details/">
                <img src="/images/img8.jpg" alt="image" />
                <img src="/images/img-hover8.jpg" alt="image" />
              </Link>

              <ul>
                <li>
                  <button
                    type="button"
                    title="Quick View"
                    onClick={handleToggleQuickViewModal}
                  >
                    <i className="far fa-eye"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Compare">
                    <i className="fas fa-sync"></i>
                  </button>
                </li>
              </ul>
            </div>

            <div className="product-content">
              <h3>
                <Link href="/products/product-details/">
                  Belted chino trousers polo
                </Link>
              </h3>

              <div className="product-price">
                <span className="new-price">$191.00</span>
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <button className="btn btn-light">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-product-box">
            <div className="product-image">
              <Link href="/products/product-details/">
                <img src="/images/img3.jpg" alt="image" />
                <img src="/images/img-hover3.jpg" alt="image" />
              </Link>

              <ul>
                <li>
                  <button
                    type="button"
                    title="Quick View"
                    onClick={handleToggleQuickViewModal}
                  >
                    <i className="far fa-eye"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                </li>
                <li>
                  <button type="button" title="Add to Compare">
                    <i className="fas fa-sync"></i>
                  </button>
                </li>
              </ul>
            </div>

            <div className="product-content">
              <h3>
                <Link href="/products/product-details/">
                  Mermaid pencil midi lace
                </Link>
              </h3>

              <div className="product-price">
                <span className="new-price">$166.00</span>
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <button className="btn btn-light">Add to Cart</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ProductsFourGrid;
