import { useState } from "react";
import "./Main.css";
import moviesArr from "../data/movies.json";
import Movie from "./Movie";
import React from "react";

export default function Main() {
 const [movies, setMovies] = useState(moviesArr);

 const displayTopRated = () => {
   const newList = movies.filter((element) => {
     return element.rating > 8;
   });
   setMovies(newList);
 };


  return (
    <section className="Main">

      <div className="controls">
        <h3>Filters:</h3>
        <button onClick={displayTopRated} className="btn-top">Only Top Rated</button>
      </div>

      {movies.map((movie) => {
        return (
          <Movie
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            imgURL={movie.imgURL}
            genres={movie.genres.join(", ")}
          />
        );
      })}
    </section>
  );
}
