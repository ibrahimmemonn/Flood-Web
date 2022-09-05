import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "react-bootstrap";
const Chart2 = () => {
  const options = {
    colors: ["#B20000", "#000000"],

    chart: {
      type: "bar",
    },
    title: {
      text: "Rainfall in 2022",
      style: {
        fontFamily: "poppins",
        fontSize: "28px",
      },
    },
    subtitle: {
      text: "compared to average rainfall",
      style: {
        fontFamily: "poppins",
        fontSize: "10px",
        marginTop: 0,
      },
    },
    yAxis: {
      labels: {
        style: {
          font: "11pt poppins",
        },
      },
    },
    legend: {
      itemStyle: {
        font: "9pt poppins",
        color: "black",
      },
      itemHoverStyle: {
        color: "#B20000",
      },
      itemHiddenStyle: {
        color: "gray",
      },
    },

    series: [
      {
        name: ["Rainfall in 2022"],
        data: [9, 8, 7, 9, 5, 8],
      },

      {
        name: ["Rainfall in 2021"],
        data: [6, 4, 5, 6, 3, 6],
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

export default Chart2;
