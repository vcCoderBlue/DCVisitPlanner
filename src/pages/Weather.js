import React from "react";
import Weather1 from "./pageitems/Weather1";
import Footer from "../components/Footer";
import API_KEYW from "./config_keys";

const API_KEY = API_KEYW;

class Weather extends React.Component {
  state = {
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Washington,DC,US&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();

      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""

      });
    }

  render() {
    return (
      <div>
        <h2>Washington Weather:</h2>
        <div onClick={this.getWeather}>
          Current Washington, DC Weather
          <h4>Click here</h4>
        </div>

        <Weather1
        temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
        />

        <br /><br /><br /><br /><br /><br /><br />
        <Footer />
      </div>
    );
  }
};

export default Weather;
