import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "react-bootstrap";
const HighChart = () => {
  const options = {
    colors: ["#000000", "#B20000"],
    chart: {
      type: "areaspline",
    },
    title: {
      text: "Live Data",
      style: {
        fontFamily: "poppins",
        fontSize: "28px",
      },
    },
    credits: {
      enabled: false,
    },
    yAxis: {
      alternateGridColor: null,
      minorTickInterval: "auto",
      lineColor: "#000",
      lineWidth: 1,
      tickWidth: 1,
      tickColor: "#000",
      labels: {
        style: {
          color: "#000",
          font: "11px poppins",
        },
      },
      title: {
        text: "Rainfall",

        style: {
          color: "#333",

          fontSize: "12px",
          fontFamily: "poppins",
        },
      },
    },
    series: [
      {
        name: ["This Month"],
        data: [6, 8, 5, 9, 8, 8],
      },

      {
        name: ["Previous Month"],
        data: [10, 4, 2, 6, 6, 9],
      },
    ],
  };
  return (
    <div>
      <Container style={{ paddingTop: 50 }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Container>
    </div>
  );
};

export default HighChart;
