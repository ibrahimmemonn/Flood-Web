import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "react-bootstrap";
const ChartData = ({
  chartType,
  chartTitle,
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
    // xAxis: {
    //   type: "datetime",
    // },
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
        text: "Casualty (Injured/Death)",

        style: {
          color: "#333",

          fontSize: "12px",
          fontFamily: "poppins",
        },
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

export default ChartData;
