import React from "react";
import Header from "../Header";
import Chart2 from "../Chart2";
import Banner from "../Home/Banner";
import ChartData from "../ChartData";
import DistrictList from "../DistrictList";
import Infography from "../Home/Infography";
import BottomNews from "../Home/BottomNews";
import Infographics from "../Home/Infographics";

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <Infography />
      <Infographics />
      <ChartData />
      <Chart2 />
      <DistrictList />
      <BottomNews />
    </>
  );
};

export default Layout;
