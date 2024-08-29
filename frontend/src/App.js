import React, { useState } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Loader from './components/Loader';
import Error from './components/Error';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const API_KEY = 'e13a71b81158b11a420a6ad4cb5f1b18';
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            setWeatherData(response.data);
        } catch (err) {
            setError('Failed to fetch weather data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Weather Forecast App</h1>
            <SearchBar onSearch={fetchWeather} />
            {loading && <Loader />}
            {error && <Error message={error} />}
            {weatherData && <Weather weatherData={weatherData} />}
        </div>
    );
};

export default App;



