import './current-weather.css';


const CurrentWeather = () => {
    return (
        <div className={"current-weather-container"}>
            <div className={"top"}>
                <div className="city-container">
                    <p className={"city"}>Jerusalem</p>
                    <p className={"weather-description"}>Sunny</p>
                </div>
                <img alt="weather-icon" className="weather-icon" src="icons/01d.png"/>
            </div>
            <div className={"bottom"}>
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="details-row">
                        <span className="details-row-label top">Details</span>
                    </div>
                    <div className="details-row">
                        <span className="details-row-label">Feels like</span>
                        <span className="details-row-value">22°C</span>
                    </div>
                    <div className="details-row">
                        <span className="details-row-label">Wind</span>
                        <span className="details-row-value">200 Mph</span>
                    </div>
                    <div className="details-row">
                        <span className="details-row-label">Humidity</span>
                        <span className="details-row-value">55%</span>
                    </div>
                    <div className="details-row">
                        <span className="details-row-label">Pressure</span>
                        <span className="details-row-value">55 hPA</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CurrentWeather;