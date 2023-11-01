export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity({
      name: data.name,
      isForGoodWeather: data.isForGoodWeather ? true : false,
    });
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <>
      <h2>Add new Activity</h2>
      <form className="container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="isForGoodWeather">Good-weather activity:</label>
          <input
            name="isForGoodWeather"
            id="isForGoodWeather"
            type="checkbox"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
