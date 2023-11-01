import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("items", {
    defaultValue: [],
  });
  function handleAddActivity(newActivity) {
    const id = uid();
    setActivities([{ ...newActivity, id }, ...activities]);
    // console.log([{ ...newActivity, id }, ...activities]);
    console.log(id);
  }
  return (
    <>
      <List activities={activities}></List>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}
