import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState({});
  function handleAddActivity(newActivity) {
    const id = uid();
    setActivities([{ ...newActivity, id }, ...activities]);
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

App();
export default App;
