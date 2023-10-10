"use client";
import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  Brand,
  Color,
  PopulerTag,
  Price,
  Size,
  collection,
} from "@/constant/productFilter";

const LeftSidebar = ({ filters, setFilters }: any) => {
  const handleFilter = (value: any, filterType: any) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };
  const handleClear = (property: any) => {
    if (filters.hasOwnProperty(property)) {
      setFilters((prevFilters: any) => ({
        ...prevFilters,
        [property]: "",
      }));
    }
  };
  const clearAllFilters = (e: any) => {
    setFilters({
      brand: "",
      color: "",
      price: "",
      collections: "",
      size: "",
      tags: "",
    });
  };
  return (
    <>
      <div className="woocommerce-sidebar-area">
        <Accordion allowMultipleExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Current Selection</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="selected-filters-wrap-list">
                <ul>
                  {Object.entries(filters).map(([key, value]) => {
                    if (value !== "" && value !== null && value !== undefined) {
                      return (
                        <li>
                          <span onClick={() => handleClear(key)}>
                            {String(value)}
                          </span>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>

                <div className="delete-selected-filters">
                  <span onClick={clearAllFilters}>
                    <i className="far fa-trash-alt"></i> <span>Clear All</span>
                  </span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Collections</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="collections-list-row">
                {collection.map((item) => (
                  <li
                    key={item}
                    onClick={() => handleFilter(item, "collections")}
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Brands</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="brands-list-row">
                {Brand.map((item) => (
                  <li key={item} onClick={() => handleFilter(item, "brand")}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Size</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="size-list-row">
                {Size.map((item) => (
                  <li key={item} onClick={() => handleFilter(item, "size")}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Price</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="price-list-row">
                {Price.map((item) => (
                  <li key={item} onClick={() => handleFilter(item, "price")}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Color</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="color-list-row">
                {Color.map((item) => (
                  <li key={item} onClick={() => handleFilter(item, "color")}>
                    <span style={{ background: `${item}` }}></span>
                  </li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Popular Tags</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="tags-list-row">
                {PopulerTag.map((item) => (
                  <li key={item} onClick={() => handleFilter(item, "tags")}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        {/* Popular Products */}
        <div className="collapse-widget aside-products-widget">
          <h3 className="aside-widget-title">Popular Products</h3>

          <div className="aside-single-products">
            <div className="products-image">
              <Link href="#">
                <img src="/images/img2.jpg" alt="image" />
              </Link>
            </div>

            <div className="products-content">
              <span>
                <Link href="#">Men's</Link>
              </span>
              <h3>
                <Link href="#">Belted chino trousers polo</Link>
              </h3>

              <div className="product-price">
                <span className="old-price">$291.00</span>
                <span className="new-price">$191.00</span>
              </div>
            </div>
          </div>

          <div className="aside-single-products">
            <div className="products-image">
              <Link href="#">
                <img src="/images/img3.jpg" alt="image" />
              </Link>
            </div>

            <div className="products-content">
              <span>
                <Link href="#">Men's</Link>
              </span>
              <h3>
                <Link href="#">Belted chino trousers polo</Link>
              </h3>

              <div className="product-price">
                <span className="old-price">$291.00</span>
                <span className="new-price">$191.00</span>
              </div>
            </div>
          </div>

          <div className="aside-single-products">
            <div className="products-image">
              <Link href="#">
                <img src="/images/img4.jpg" alt="image" />
              </Link>
            </div>

            <div className="products-content">
              <span>
                <Link href="#">Men's</Link>
              </span>
              <h3>
                <Link href="#">Belted chino trousers polo</Link>
              </h3>

              <div className="product-price">
                <span className="old-price">$291.00</span>
                <span className="new-price">$191.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Trending */}
        <div className="collapse-widget aside-trending-widget">
          <div className="aside-trending-products">
            <img src="/images/bestseller-hover-img1.jpg" alt="image" />

            <div className="category">
              <h4>Top Trending</h4>
              <span>Spring/Summer 2018 Collection</span>
            </div>
            <Link href="#"></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
