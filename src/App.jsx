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
  const [weather, setWeather] = useState(null);

  async function startFetching() {
    const response = await fetch(
      "https://example-apis.vercel.app/api/weather/europe"
    );
    const weatherObject = await response.json();
    setWeather(weatherObject);
  }

  useEffect(() => {
    startFetching();

    const intervalID = setInterval(() => {
      startFetching();
    }, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  if (!weather) {
    return <h1>Loading...</h1>;
  }

  function handleAddActivity(newActivity) {
    const id = uid();
    setActivities(
      [{ ...newActivity, id }, ...activities].filter(
        (activity) => activity.isForGoodWeather == weather.isGoodWeather
      )
    );
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
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
        onDeleteActivity={handleDeleteActivity}
      ></List>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}
