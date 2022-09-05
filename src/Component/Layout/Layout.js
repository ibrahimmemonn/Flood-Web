import React from "react";
import Chart2 from "../Chart2";
import Header from "../Header";
import HighChart from "../HighChart";
import Banner from "../Home/Banner";
import BottomNews from "../Home/BottomNews";
import Infographics from "../Home/Infographics";
import Infography from "../Home/Infography";

import Map from "../Map";

const Layout = () => {
  return (
    <>
      <Header />

      <Banner />
      <Infography />
      <Infographics />
      <HighChart />
      <Chart2 />
      <Map />
      <BottomNews />
    </>
  );
};

export default Layout;
