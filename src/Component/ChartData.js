import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "react-bootstrap";
const ChartData = () => {
  const options = {
    colors: ["#000000", "#B20000"],
    chart: {
      type: "areaspline",
    },
    title: {
      text: "District Wise and Year Wise",
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
        name: ["Male"],
        data: [500, 700, 500, 900, 355, 345],
      },
      {
        name: ["Female"],
        data: [800, 500, 700, 400, 577, 654],
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
