import { useState } from "react";
import "./AddMovie.css";

export default function AddMovie(props) {
  const [titleInput, setTitleInput] = useState("");
  const [yearInput, setYearInput] = useState("1995");
  const [ratingInput, setRatingInput] = useState("");

  // Task 2:
  // const [input, setInputs] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    // event.preventDefault() prevents the page from refreshing - for form
    const newMovie = {
      title: titleInput,
      year: yearInput,
      rating: ratingInput,
    };
    props.createNewMovie(newMovie);
    //setMovies([newMovie, ...movies]); // this is moved to App.js, so we have to props it
    clearForm();
  };

  const clearForm = () => {
    setTitleInput("");
    setYearInput("1995");
    setRatingInput("");
  };

  const handleTitleInput = (event) => {
    const newTitle = event.target.value;
    setTitleInput(newTitle);
    // for input field
  };

  const handleYearInput = (event) => {
    const newYear = event.target.value;
    setYearInput(newYear);
  };

  const handleRatingInput = (event) => {
    const newRating = event.target.value;
    setRatingInput(newRating);
  };

  return (
    <div className="form-addMovie">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={titleInput}
            onChange={handleTitleInput}
          />
        </label>

        <label>
          Year:
          <input
            type="number"
            name="year"
            value={yearInput}
            onChange={handleYearInput}
          />
        </label>

        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={ratingInput}
            onChange={handleRatingInput}
            min="1"
            max="10"
          />
        </label>
        <button type="submit">Add movie</button>
      </form>
    </div>
  );
}
