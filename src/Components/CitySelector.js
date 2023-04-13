import {useContext} from "react";
import {WeatherContext} from "../Context/WeatherContext";
import cities from "../Data/cities.json";
import "../App.css";
//sehirlerin listelendigi json dosyasi uzerinden sehirlere ulasiliyro
const CitySelector = () => {
    const {city, setCity} = useContext(WeatherContext);
    console.log(city)
    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="city-selector-container">
            <select value={city} onChange={handleChange}>
                <option value=''>{city}</option>
                {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                        {city.name}
                    </option>

                ))}
            </select>
        </div>




);
};

export default CitySelector;
