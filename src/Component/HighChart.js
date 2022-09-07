import React from "react";
import ChartData from "./HighChart/ChartData";

const HighChart = () => {
  return (
    <ChartData
      chartType="areaspline"
      chartTitle="District Wise and Year Wise"
      colors={["#000000", "#B20000"]}
      data={[500, 700, 500, 900, 355, 900]}
      data2={[800, 500, 700, 400, 577, 654]}
      dataTitle={["Male"]}
      dataTitle2={["Female"]}
    />
  );
};

export default HighChart;
