import React, { useContext, useState, useEffect } from "react";
import AppContext from "../context/context";
import getWeather from "../service/getWeather";

const Report = ({ cityValue, countryValue }) => {
  //useContext of weather
  const [stateWeather, dispatchWeather, initialStateWeather] =
    useContext(AppContext);
    //state to update data
  const [weather, setWeather] = useState(initialStateWeather);
  // data
  const name = weather.state.name;
  const country = weather.state.sys.country;
  const fecha = new Date(weather.state.dt * 1000);
  const day = fecha
    .toLocaleDateString("es-ES", { weekday: "long" })
    .toUpperCase();
  const description = weather.state.weather[0].description;
  const temp = Math.round(weather.state.main.temp);
  const fahrenheit = ((weather.state.main.temp * 9) / 5 + 32).toFixed(1);
  const image = `http://openweathermap.org/img/wn/${weather.state.weather[0].icon}@2x.png`;
  const precip = weather.state.weather[0].main;
  const humidity = weather.state.main.humidity;
  const wind = Math.round(weather.state.wind.speed);
  // useEffect to get data
  useEffect(() => {
    setWeather(stateWeather);
  }, [stateWeather]);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-white pl-4 pr-4">
      <div className=" md:col-span-2 flex justify-center items-center h-8 border-b-2 border-black">
        Reporte del Tiempo
      </div>
      <div className="col-span-1 block">
        <div>
          <h3 className="text-gray-400">{country}</h3>
        </div>
        <div>
          <h1 className="text-gray-400 text-2xl mt-2">{name}</h1>
        </div>
        <div className="text-gray-900 text-3xl mt-2">{day}</div>
        <div className="text-gray-900 text-2xl mt-2">{description}</div>
        <div className="text-gray-900 text-5xl mt-2">{`${temp} °C`}</div>
        <div className="text-gray-900 text-xl mt-2">{`${fahrenheit} °F`}</div>
      </div>
      <div className="col-span-1 block">
        <div>
          <img src={image} alt="icon clima"></img>
        </div>
        <div className="text-gray-900 text-base mt-2">
          prob de precipitaciones: 0%
        </div>
        <div className="text-gray-900 text-base mt-2">
          {`Humedad: ${humidity} %`}
        </div>
        <div className="text-gray-900 text-base mt-2">
          {`Viento: ${wind} km/h`}
        </div>
      </div>
    </div>
  );
};

export default Report;
