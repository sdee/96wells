import React, { Component } from 'react';
import * as d3 from 'd3';

class Plate extends Component {
    constructor() {
        super();

        this.state = {
            rawData: [],
            dataFilter: () => true
        };
    }

    loadRawData() {

        d3.csv(this.props.url)
          .row((d) => {

              return {};
          })
          .get((error, rows) => {
              if (error) {
                  console.error(error);
                  console.error(error.stack);
              }else{
                  this.setState({rawData: rows});
              }
          });
    }

    componentWillMount() {
        this.loadRawData();
    }

    render() {

        return (
            <div>
							Plate
            </div>
        );
    }
}

export default Plate;
