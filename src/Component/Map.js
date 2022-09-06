import React, { Component, useState } from "react";
import { findDOMNode, render } from "react-dom";
import Highcharts from "highcharts";
import HighMaps from "highcharts/highmaps";
import drilldown from "highcharts/modules/drilldown";
import map from "highcharts/modules/map";
import usAll from "./usAll";

class Map extends Component {
  componentDidMount() {
    // load modules
    //drilldown(Highcharts);

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
        // min: 0,
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
                alert(this.changeName);
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
