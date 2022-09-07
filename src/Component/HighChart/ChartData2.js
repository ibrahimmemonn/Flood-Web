import React from "react";
import Highcharts from "highcharts";
import { Container } from "react-bootstrap";
import HighchartsReact from "highcharts-react-official";
const ChartData2 = ({
  chartType,
  chartTitle,
  chartSubTitle,
  data,
  data2,
  colors,
  dataTitle,
  dataTitle2,
}) => {
  const options = {
    colors: colors,
    chart: {
      type: chartType,
    },
    title: {
      text: chartTitle,
      style: {
        fontFamily: "poppins",
        fontSize: "28px",
      },
    },
    credits: {
      enabled: false,
    },
    subtitle: {
      text: chartSubTitle,
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
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 1,
        pointWidth: 10,
      },
    },
    series: [
      {
        name: dataTitle,

        data: data,
      },

      {
        name: dataTitle2,
        data: data2,
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

export default ChartData2;
