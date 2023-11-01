import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  // console.log(activities);
  const listActivities = activities.map((activity) => (
    <li className="list-item" key={activity.id}>
      {activity.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button
        className="delete-button"
        onClick={() => onDeleteActivity(activity.id)}
      >
        x
      </button>
    </li>
  ));

  return (
    <>
      <h3>
        {isGoodWeather
          ? `The weather is awesome! Go outside and:`
          : `Bad weather outside! Here's what you can do now:`}
      </h3>
      <ul className="list-container">{listActivities}</ul>
    </>
  );
}
