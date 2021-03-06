import "./Movie.css";
import { useState } from "react";

export default function Movie(props) {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <section className={props.rating < 9 ? "Movie" : "Movie best"}>
      <div className="flex-container">
        {props.imgURL ? (
          <img src={props.imgURL} />
        ) : (
          <img src="https://via.placeholder.com/182x268" alt="no image" />
        )}

        {/* NEW: {props.imgURL && <img src={props.imgURL} />} */}
        {/* if true, then render (no else condition) */}

        <div className="movie-content">
          <h2>{props.title}</h2>
          <p>
            Year: {props.year} | Rating: {props.rating} | Genre: {props.genres}
          </p>

          <p>Likes: {counter}</p>
          <button onClick={increaseCounter} className="btn-like">
            ♡ Like
          </button>
          <button onClick={decreaseCounter} className="btn-dislike">
            Dislike
          </button>

          {/* <button onClick={removeMovie}> Remove movie</button> */}
        </div>
      </div>
    </section>
  );
}
