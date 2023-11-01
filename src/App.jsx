import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("items", {
    defaultValue: [],
  });

  // const isGoodWeather = true;
  const [weather, setWeather] = useState({});
  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/europe"
      );
      const weatherObject = await response.json();
      setWeather(weatherObject);
    }
    startFetching();
  }, []);

  function handleAddActivity(newActivity) {
    const id = uid();
    setActivities(
      [{ ...newActivity, id }, ...activities].filter(
        (activity) => activity.isForGoodWeather == weather.isGoodWeather
      )
    );
  }
  console.log(weather);
  console.log("Weather:", weather.isGoodWeather);
  return (
    <>
      <h1>
        {weather.condition}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {weather.temperature}°C
      </h1>
      <List
        activities={activities}
        isGoodWeather={weather.isGoodWeather}
      ></List>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}
