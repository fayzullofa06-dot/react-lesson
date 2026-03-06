import { Fragment } from "react"

function EventList({ cars, handleDelete}) {
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          <h1>{car.name}</h1>
          <h3>{car.Year}</h3>
          <button onClick={() => handleDelete(car.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default EventList
