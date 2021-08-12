import React, { Component } from 'react';
import { getCityForecast } from '../api/api'
import './weatherCard.css';

class WeatherCard extends Component {
    state = {
        isLoading: true,
        forecast: undefined
    };

    componentDidMount() {
        getCityForecast(this.props.station, this.props.cityId)
            .then(response => {
                this.setState({ forecast: response });
                this.setState({ isLoading: false });
        });
    }

    render() {
        const { isLoading, forecast } = this.state;

        if (isLoading) {
            return null;
        }

        const cardStyle = {background: 'url(' + this.props.cityscape + ') no-repeat center'};

        return (  
            <div className="card card-weather my-2">
                <div className="card-body text-gray" style={cardStyle}>
                    <div className="weather-date-location" style={{opacity: '1'}}>
                        <h3> {forecast.city} </h3>
                        <p className="text-gray"> <span className="weather-date"> {forecast.dateNow} </span> </p>
                    </div>
                    <div className="weather-data d-flex">
                        <div className="mr-auto">
                            <h4 className="display-3"> {forecast.temperatureNow}<span className="symbol">°</span>C</h4>
                            <p> {forecast.weatherConditionsNow} </p>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="d-flex weakly-weather">
                        <div className="weakly-weather-item">
                            <p className="mb-1"> <b> {forecast.weekForecast[0].date} </b> </p>
                            <p className="mb-0"> {forecast.weekForecast[0].minimumTemperature}<span className="symbol">°</span>C </p>
                            <p className="mb-0"> {forecast.weekForecast[0].maximumTemperature}<span className="symbol">°</span>C </p>
                        </div>
                        <div className="weakly-weather-item">
                            <p className="mb-1"> <b> {forecast.weekForecast[1].date} </b> </p>
                            <p className="mb-0"> {forecast.weekForecast[1].minimumTemperature}<span className="symbol">°</span>C </p>
                            <p className="mb-0"> {forecast.weekForecast[1].maximumTemperature}<span className="symbol">°</span>C </p>
                        </div>
                        <div className="weakly-weather-item">
                            <p className="mb-1"> <b> {forecast.weekForecast[2].date} </b> </p>
                            <p className="mb-0"> {forecast.weekForecast[2].minimumTemperature}<span className="symbol">°</span>C </p>
                            <p className="mb-0"> {forecast.weekForecast[2].maximumTemperature}<span className="symbol">°</span>C </p>
                        </div>
                        <div className="weakly-weather-item">
                            <p className="mb-1"> <b> {forecast.weekForecast[3].date} </b> </p>
                            <p className="mb-0"> {forecast.weekForecast[3].minimumTemperature}<span className="symbol">°</span>C </p>
                            <p className="mb-0"> {forecast.weekForecast[3].maximumTemperature}<span className="symbol">°</span>C </p>
                        </div>
                        <div className="weakly-weather-item">
                            <p className="mb-1"> <b> {forecast.weekForecast[4].date} </b> </p>
                            <p className="mb-0"> {forecast.weekForecast[4].minimumTemperature}<span className="symbol">°</span>C </p>
                            <p className="mb-0"> {forecast.weekForecast[4].maximumTemperature}<span className="symbol">°</span>C </p>
                        </div>
                        <div className="weakly-weather-item">
                            <p className="mb-1"> <b> {forecast.weekForecast[5].date} </b> </p>
                            <p className="mb-0"> {forecast.weekForecast[5].minimumTemperature}<span className="symbol">°</span>C </p>
                            <p className="mb-0"> {forecast.weekForecast[5].maximumTemperature}<span className="symbol">°</span>C </p>
                        </div>
                        <div className="weakly-weather-item">
                            <p className="mb-1"> <b> {forecast.weekForecast[6].date} </b> </p>
                            <p className="mb-0"> {forecast.weekForecast[6].minimumTemperature}<span className="symbol">°</span>C </p>
                            <p className="mb-0"> {forecast.weekForecast[6].maximumTemperature}<span className="symbol">°</span>C </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherCard;
