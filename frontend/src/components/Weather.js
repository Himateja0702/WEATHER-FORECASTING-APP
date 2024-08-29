import React from 'react';
import './Weather.css';

const Weather = ({ weatherData }) => {
    return (
        <div className="weather-card">
            <h1>{weatherData.name}</h1>
            <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            <p>Description: {weatherData.weather[0].description}</p>
        </div>
    );
};

export default Weather;




