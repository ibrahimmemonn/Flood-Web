import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import HighMaps from "highcharts/highmaps";

import usAll from "./MapData";

class Map extends Component {
  componentDidMount() {
    let data = [
      ["pk-sd", 10],
      ["pk-ba", 11],
      ["pk-jk", 12],
      ["pk-na", 13],
      ["pk-nw", 14],
      ["pk-ta", 15],
      ["pk-is", 16],
      ["pk-pb", 17],
    ];

    const options = {
      title: {
        text: " ",
      },
      plotOptions: {
        map: {
          states: {
            hover: {
              color: "#EEDD66",
            },
          },
        },
      },
      mapNavigation: {
        enabled: true,
        enableButtons: false,
      },
      colorAxis: {
        minColor: "#B20000",
        maxColor: "#ffff",
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },
      credits: {
        enabled: false,
      },
      navigator: {
        enabled: false,
      },
      plotOptions: {
        series: {
          point: {
            events: {
              click: function () {
                alert(this.name);
              },
            },
          },
        },
      },

      series: [
        {
          mapData: usAll,
          data: data,
          name: "Pakistan",

          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },
        },
      ],
      mapNavigation: {
        enabled: false,
        buttonOptions: {
          verticalAlign: "bottom",
        },
      },
    };

    this.chart = new HighMaps["Map"](findDOMNode(this), options);
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div className="in-highchart" />;
  }
}

export default Map;
