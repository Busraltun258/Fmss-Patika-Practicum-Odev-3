import {createContext, useState} from "react";

export const WeatherContext = createContext();
//varsayilan deger istanbbul olarak ayarlandi
export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState("İSTANBUL");
    const [forecast, setForecast] = useState([]);


    const contextValues = {
        city,
        setCity,
        forecast,
        setForecast,
    };

    return (
        <WeatherContext.Provider value={contextValues}>
            {children}
        </WeatherContext.Provider>
    );
};
