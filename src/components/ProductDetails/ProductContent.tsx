import React from "react";
import Link from "next/link";

const ProductContent = () => {
  return (
    <>
      <div className="product-details-content">
        <h3>Belted chino trousers polo</h3>

        <div className="price">
          <span className="new-price">$191.00</span>
        </div>

        <div className="product-review">
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <Link href="#" className="rating-count">
            3 reviews
          </Link>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>

        <ul className="product-info">
          <li>
            <span>Vendor:</span> <Link href="#">Lereve</Link>
          </li>
          <li>
            <span>Availability:</span>{" "}
            <Link href="#">In stock (7 items)</Link>
          </li>
          <li>
            <span>Product Type:</span> <Link href="#">T-Shirt</Link>
          </li>
        </ul>

        <div className="product-color-switch">
          <h4>Color:</h4>

          <ul>
            <li>
              <Link href="#" title="Black" className="color-black"></Link>
            </li>
            <li>
              <Link href="#" title="White" className="color-white"></Link>
            </li>
            <li className="active">
              <Link href="#" title="Green" className="color-green"></Link>
            </li>
            <li>
              <Link
                href="#"
                title="Yellow Green"
                className="color-yellowgreen"
              ></Link>
            </li>
            <li>
              <Link href="#" title="Teal" className="color-teal"></Link>
            </li>
          </ul>
        </div>

        <div className="product-size-wrapper">
          <h4>Size:</h4>

          <ul>
            <li>
              <Link href="#">XS</Link>
            </li>
            <li className="active">
              <Link href="#">S</Link>
            </li>
            <li>
              <Link href="#">M</Link>
            </li>
            <li>
              <Link href="#">XL</Link>
            </li>
            <li>
              <Link href="#">XXL</Link>
            </li>
          </ul>
        </div>

        <div className="product-info-btn">
          <Link href="#">
            <i className="fas fa-crop"></i> Size guide
          </Link>
          <Link href="#">
            <i className="fas fa-truck"></i> Shipping
          </Link>

          <Link href="#">
            <i className="far fa-envelope"></i> Ask about this product
          </Link>
        </div>

        <div className="product-add-to-cart">
          <div className="input-counter">
            <input type="number" defaultValue={1} />
          </div>

          <button type="submit" className="btn btn-primary">
            <i className="fas fa-cart-plus"></i> Add to Cart
          </button>
        </div>

        <div className="wishlist-compare-btn">
          <button className="btn btn-light">
            <i className="far fa-heart"></i> Add to Wishlist
          </button>

          <Link href="#" className="btn btn-light">
            <i className="fas fa-balance-scale"></i> Add to Compare
          </Link>
        </div>

        <div className="buy-checkbox-btn">
          <div className="item">
            <input className="inp-cbx" id="cbx" type="checkbox" />
            <label className="cbx" htmlFor="cbx">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>I agree with the terms and conditions</span>
            </label>
          </div>

          <div className="item">
            <Link href="#" className="btn btn-primary">
              Buy it now!
            </Link>
          </div>
        </div>

        <div className="custom-payment-options">
          <span>Guaranteed safe checkout:</span>

          <div className="payment-methods">
            <Link href="#">
              <img src="/images/payment-image/1.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/2.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/3.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/4.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/5.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/6.svg" alt="image" />
            </Link>

            <Link href="#">
              <img src="/images/payment-image/7.svg" alt="image" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
