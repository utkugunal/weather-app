export default function List({ activities, isGoodWeather }) {
  // console.log(activities);
  const listActivities = activities.map((activity) => (
    <li key={activity.id}>{activity.name}</li>
  ));

  return (
    <>
      <h3>
        {isGoodWeather
          ? `The weather is awesome! Go outside and:`
          : `Bad weather outside! Here's what you can do now:`}
      </h3>
      <ul>{listActivities}</ul>
    </>
  );
}
