import { useState } from "react";

const api = {
  key: "f4bf660cea3c7bff59a301e2cfb50b85",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App p-3 max-w-lg mx-auto">
      <h1 className="text-center font-bold py-4 text-3xl">Check Weather</h1>
      <div className="App-header flex justify-center">

        {/* Search Box - Input + Button  */}
        <div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter city/town..."
              className="p-3 rounded-lg bg-slate-100"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-65"
              onClick={searchPressed}
            >
              Search
            </button>
          </div>
          {typeof weather.main !== "undefined" ? (
            <div className="flex flex-col gap-4">
              {/* Location  */}
              <p>Asked Location: {weather.name}</p>

              {/* Temperature Celsius  */}
              <p>Temperature: {weather.main.temp}°C</p>

              {/* Condition (Sunny ) */}
              <p>Sky: {weather.weather[0].main}</p>
              <p>Description: ({weather.weather[0].description})</p>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* If weather is not undefined display results from API */}
      </div>
    </div>
  );
}
