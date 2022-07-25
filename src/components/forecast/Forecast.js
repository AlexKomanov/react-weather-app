import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import './forecast.css'

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Forecast = ({data}) => {

    const currentDay = new Date().getDay();
    const weekForecast = WEEK_DAYS.slice(currentDay, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, currentDay));
    console.log('weekForecast ', weekForecast)

    return (
        <>
            <label className="forecast-title font-bold text-xl">Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item bg-slate-50 rounded-3xl h-10 m-1.5 flex items-center	cursor-pointer text-sm py-1.5 px-5">
                                    <img className={"icon-small w-[40px]"} alt="weather"
                                         src={`icons/${item.weather[0].icon}.png`}/>
                                    <label className="day colo flex-1 text-amber-900 font-bold ml-3.5 cursor-pointer">{weekForecast[idx]}</label>
                                    <label className="description flex-1 text-right mr-5 text-neutral-900 cursor-pointer">{item.weather[0].description}</label>
                                    <label className="min-max-temp text-neutral-400 cursor-pointer">{Math.round(item.main.temp_min)}°C
                                        - {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure} hPA</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels like:</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;