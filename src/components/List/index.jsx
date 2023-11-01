export default function List({ activities }) {
  // console.log(activities);
  const listActivities = activities.map((activity) => (
    <li key={activity.id}>{activity.name}</li>
  ));

  return <ul>{listActivities}</ul>;
}
