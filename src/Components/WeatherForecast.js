import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Puff} from "react-loader-spinner";
import {WiDaySunny} from "react-icons/wi";
import {WiCloud} from "react-icons/wi";
import {WiRain} from "react-icons/wi";
import {WiSnow} from "react-icons/wi";
import {WiThunderstorm} from "react-icons/wi";
import {WiDayFog} from "react-icons/wi";
import "../App.css";
import {WeatherContext} from "../Context/WeatherContext";

const WeatherForecast = () => {
    const {city: contextCity} = useContext(WeatherContext);
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState([]);
    const key = "29fc04065469346f226a149b0e081ded";
    const [city, setCity] = useState(contextCity || "İSTANBUL");

//data cekme islemi

    useEffect(() => {
        const fetchForecast = async () => {
            setLoading(true);
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=tr`
            );
            setForecast(response.data.list.filter((data, index) => index % 8 === 0));
            setLoading(false);
        };

        if (!contextCity) {
            setCity("İSTANBUL");
        }

        fetchForecast();
    }, [city, contextCity]);

    useEffect(() => {
        setCity(contextCity || "İSTANBUL");
    }, [contextCity]);
//hava durmu tipleri
    const renderWeatherIcon = (weatherCode) => {
        switch (weatherCode) {
            case "01d":
                return <WiDaySunny/>;
            case "01n":
                return <WiDaySunny/>;
            case "02d":
                return <WiCloud/>;
            case "02n":
                return <WiCloud/>;
            case "03d":
            case "03n":
                return <WiCloud/>;
            case "04d":
            case "04n":
                return <WiCloud/>;
            case "09d":
            case "09n":
                return <WiRain/>;
            case "10d":
            case "10n":
                return <WiRain/>;
            case "11d":
            case "11n":
                return <WiThunderstorm/>;
            case "13d":
            case "13n":
                return <WiSnow/>;
            case "50d":
            case "50n":
                return <WiDayFog/>;
            default:
                return null;
        }
    };

    return (
        <div className="weather-forecast-container">
            {loading && <Puff color="#000" size={80} style={{marginLeft: "50%"}}/>}
            {!loading && forecast.length > 0 && (
                <div className="weather-forecast">
                    {forecast.map((data) => (
                        <div key={data.dt} className="weather-forecast-card">
                            <div className="weather-forecast-date">
                                {new Date(data.dt * 1000).toLocaleDateString("tr-TR", {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "short",
                                })}
                            </div>
                            <div className="weather-forecast-icon-description">
                                {renderWeatherIcon(data.weather[0].icon)}{" "}
                                {data.weather[0].description}
                            </div>
                            <div className="weather-forecast-temp">
                                {Math.round(data.main.temp)}°C

                            </div>

                        </div>
                    ))}

                </div>

            )}
        </div>
    );
};

export default WeatherForecast;
