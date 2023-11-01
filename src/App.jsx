import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List";

export default function App() {
  const [activities, setActivities] = useState([]);
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
