import React from "react";
import mapData from "../Component/api/mapData";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// require("highcharts/modules/map")(Highcharts);

class MyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: null,
    };
    // init to get the map data from api
    this.mapData = new mapData(["pk-sd", 10], ["pk-ba", 11]);

    // preparing the config of map with empty data
    this.options = {
      title: {
        text: "Widget click by location",
      },
      chart: {
        type: "map",
        map: null,
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom",
        },
      },

      series: [
        {
          data: mapData,
          name: "Random data",
          states: {
            hover: {
              color: "#B20000",
            },
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },
        },
      ],
    };

    // get the world map data
    this.mapData.getWorld().then((r) => {
      this.setState({ mapData: r.data }, () => {
        this.options.series[0].data = []; //make sure data is empty before  fill
        this.options["chart"]["map"] = this.state.mapData; // set the map data of the graph (using the world graph)

        // filling up some dummy data with values 1 and 2
        // instead of using the google sheet
        for (let i in this.state.mapData["features"]) {
          let mapInfo = this.state.mapData["features"][i];
          if (mapInfo["id"]) {
            var postalCode = mapInfo.properties["postal-code"];

            var name = mapInfo["properties"]["name"];
            var value = (i % 2) + 1;
            var type = value === 1 ? "widget name one" : "widget name two";
            var row = i;
            this.options.series[0].data.push({
              value: value,
              name: name,
              "postal-code": postalCode,
              row: row,
              type: type,
            });
          }
        }
        // updating the map options
        this.setState({ mapOptions: this.options });
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.mapOptions ? (
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"mapChart"}
            options={this.state.mapOptions}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MyMap;
