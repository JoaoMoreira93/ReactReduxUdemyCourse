import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googlemap';

class WeatherList extends Component{
  renderWeather(cityData){
    const name= cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp),
                  (temp) => temp - 273);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // ES6
    // obtem as propriedades props do objeto
    // identico ao import
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="orange" units="ºC"/>
        </td>
        <td>
          <Chart data={pressure} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="black" units="%" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (ºC)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  // { weather } === { weather: weather}
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
