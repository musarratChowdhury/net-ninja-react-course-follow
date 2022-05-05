import React, { useCallback, useEffect, useState } from "react";

export default function WeatherData() {
  const [weatherList, setWeatherList] = useState([]);
  const [url, setUrl] = useState(
    "http://api.weatherapi.com/v1/current.json?key=2f22c1d30d064d73949133853222204&q=Dhaka&aqi=no"
  );

  //
  const fetchTrips = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setWeatherList(json);
  }, [url]);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  //
  return (
    <div>
      <h3>Weather Data</h3>
      {weatherList.current && (
        <ul>
          <h4>condition : {weatherList.current.condition.text}</h4>
          <h5>humidity : {weatherList.current.humidity}</h5>
          <h5>temp_c : {weatherList.current.temp_c}</h5>
          <h5>wind_degree : {weatherList.current.wind_degree}</h5>
        </ul>
      )}
    </div>
  );
}
