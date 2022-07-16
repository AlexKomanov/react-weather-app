import './App.css';
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";

function App() {

    const handleOnSearchChange = (searchData) => {
        const [latitude, longitude] = searchData.value.split(" ");
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
