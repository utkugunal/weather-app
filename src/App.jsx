import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("items", {
    defaultValue: [],
  });

  const isGoodWeather = true;

  function handleAddActivity(newActivity) {
    const id = uid();
    setActivities(
      [{ ...newActivity, id }, ...activities].filter(
        (activity) => activity.isForGoodWeather == isGoodWeather
      )
    );
    // console.log([{ ...newActivity, id }, ...activities]);
    console.log(id);
  }
  return (
    <>
      <List activities={activities} isGoodWeather={isGoodWeather}></List>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}
