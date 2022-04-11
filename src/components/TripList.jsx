import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import "./TripList.css";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, loading, error } = useFetch(url, { type: "GET" });
  //

  return (
    <div className="triplist">
      <h2>TripList</h2>
      {loading && <div>Loading Trips .....</div>}
      {error && <div>{error.msg}</div>}
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <div>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
              </div>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}
