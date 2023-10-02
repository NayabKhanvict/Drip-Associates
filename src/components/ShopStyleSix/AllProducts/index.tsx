"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LatestProducts from "./LatestProducts";
import SpecialProducts from "./SpecialProducts";
import FeaturedProducts from "./FeaturedProducts";

const AllProducts = ({ data }: any) => {
  const latestData = data.products.latest_products;
  const featuredData = data.products.featured_products;
  const specialData = data.products.special_products;
  console.log(latestData, featuredData, specialData);
  return (
    <>
      <div className="all-products-area pb-60">
        <div className="container">
          <div className="products-category-tab">
            <Tabs className="without-bg">
              <TabList>
                <Tab>
                  <span className="tabs-nav-text">
                    <span className="dot"></span> Latest Products
                  </span>
                </Tab>
                <Tab>
                  <span className="tabs-nav-text">
                    <span className="dot"></span> Special Products
                  </span>
                </Tab>
                <Tab>
                  <span className="tabs-nav-text">
                    <span className="dot"></span> Featured Products
                  </span>
                </Tab>
              </TabList>

              <TabPanel>
                <LatestProducts latestData={latestData} />
              </TabPanel>

              <TabPanel>
                <SpecialProducts specialData={specialData} />
              </TabPanel>

              <TabPanel>
                <FeaturedProducts featuredData={featuredData} />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
