import './current-weather.css';


const CurrentWeather = ({data}) => {
    return (
        <div className={"current-weather-container"}>
            <div className={"top"}>
                <div className="city-container">
                    <p className={"city"}>{data.city}</p>
                    <p className={"weather-description"}>{data.weather[0].description}</p>
                </div>
                <img alt="weather-icon" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>
            </div>
            <div className={"bottom"}>
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="details-row">
                        <span className="details-row-label top">Details</span>
                    </div>
                    <div className="details-row">
                        <span className="details-row-label">Feels like</span>
                        <span className="details-row-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="details-row">
                        <span className="details-row-label">Wind</span>
                        <span className="details-row-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="details-row">
                        <span className="details-row-label">Humidity</span>
                        <span className="details-row-value">{data.main.humidity} %</span>
                    </div>
                    <div className="details-row">
                        <span className="details-row-label">Pressure</span>
                        <span className="details-row-value">{data.main.pressure} hPA</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CurrentWeather;