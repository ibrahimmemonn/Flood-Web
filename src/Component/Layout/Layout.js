import React from "react";
import Header from "../Header";
import Banner from "../Home/Banner";
import DistrictList from "../DistrictList";
import Infography from "../Home/Infography";
import BottomNews from "../Home/BottomNews";
import Infographics from "../Home/Infographics";
import ReviewSection from "../ReviewSection";
import HighChart from "../HighChart";
import HighChart2 from "../HighChart2";

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <Infography />
      <Infographics />
      <DistrictList />
      <HighChart />
      <HighChart2 />
      <ReviewSection />
      <BottomNews />
    </>
  );
};

export default Layout;
