

import "./App.css";
import {WeatherProvider} from "./Context/WeatherContext";
import CitySelector from "./Components/CitySelector";
import WeatherForecast from "./Components/WeatherForecast";

function App() {
  return (
      <div className="App">
        <WeatherProvider>
          <CitySelector />
          <WeatherForecast />
        </WeatherProvider>
      </div>
  );
}

export default App;

