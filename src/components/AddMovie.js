import { useState } from "react";
import "./AddMovie.css";

export default function AddMovie(props) {
  const [inputs, setInputs] = useState({
    title: "",
    year: 2000,
    rating: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // event.preventDefault() prevents the page from refreshing - for form
    const newMovie = {
      title: inputs.title,
      year: inputs.year,
      rating: inputs.rating,
    };
    props.createNewMovie(newMovie);
    //setMovies([newMovie, ...movies]); // this is moved to App.js, so we have to props it
    clearForm();
  };

  const clearForm = () => {
    setInputs({
      title: "",
      year: 2000,
      rating: "",
    });
  };

  const handleInputChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  // prevState is the value we had before, and we extend with new values from input fields

  return (
    <div className="form-addMovie">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Year:
          <input
            type="number"
            name="year"
            value={inputs.year}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={inputs.rating}
            onChange={handleInputChange}
            min="1"
            max="10"
          />
        </label>
        <button type="submit">Add movie</button>
      </form>
    </div>
  );
}
