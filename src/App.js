import React from "react";
import "./App.css";
import TripList from "./components/TripList";
import WeatherData from "./components/WeatherData";

export default function App() {
  return (
    <div className="App">
      <TripList />
      <WeatherData />
    </div>
  );
}
