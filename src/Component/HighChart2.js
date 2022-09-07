import React from "react";
import Chart2 from "./HighChart/ChartData2";

const HighChart2 = () => {
  return (
    <Chart2
      chartType="bar"
      chartTitle="Rainfall in 2022"
      chartSubTitle="compared to average rainfall"
      data={[9, 8, 7, 9, 5, 8]}
      data2={[6, 4, 5, 6, 3, 4]}
      colors={["#B20000", "#000000"]}
      dataTitle={["Rainfall in 2022"]}
      dataTitle2={["Rainfall in 2021"]}
    />
  );
};

export default HighChart2;
