export default function Form({ onAddActivity }) {
  return (
    <>
      <h2>Add new Activity</h2>
      <form className="container">
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="isGoodWeatherActivity">Good-weather activity:</label>
          <input
            name="isGoodWeatherActivity"
            id="isGoodWeatherActivity"
            type="checkbox"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
