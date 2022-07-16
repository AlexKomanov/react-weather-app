import './App.css';
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import {WEATHER_API_KEY, WEATHER_API_URL} from "./api";
import {useState} from "react";

function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [latitude, longitude] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`)
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`)

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({city: searchData.label , ...weatherResponse});
                setForecast({city: searchData.label , ...forecastResponse});

            })
            .catch((err) => console.log(err));
    }


    return (
        <div className="container">
            <h2 className="title">Check The Weather</h2>
            <Search onSearchChange={handleOnSearchChange}/>
            <CurrentWeather />
        </div>
    );
}

export default App;
