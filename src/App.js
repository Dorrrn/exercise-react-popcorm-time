import "./App.css";
import { useState } from "react";
import moviesArr from "./data/movies.json";
import Header from "./components/Header";
import AddMovie from "./components/AddMovie";
import Controls from "./components/Controls";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [movies, setMovies] = useState(moviesArr);

  const filterTopRated = (minRating = 8) => {
    // NEW: we can pass a default argument, in case no argument is passed -> (minRating = 8)
    const newList = moviesArr.filter((element) => {
      return element.rating > minRating;
    });
    setMovies(newList);
  };

  const createMovie = (movieDetails) => {
    setMovies([movieDetails, ...movies]);
    // update list of movies with newMovie from AddMovie.js
  };
  // Task 1:
  // const removeMovie = (movieId) => {
  //   const filteredMovies = moviesArr.filter ((movie)=> {
  //     return movie.id !== movieId;
  //   })
  //   setMovies(filteredMovies)
  // };

  return (
    <div className="App">
      <Header numberOfMovies={movies.length} />
      {/* if only pass 1 information, you can already name it here */}

      <AddMovie createNewMovie={createMovie} />

      <Controls displayTopRated={filterTopRated} />
      {/* we call the function filterTopRated from App.js to Controls.js --> execute callback */}

      <Main moviesArr={movies} />
      {/* moviesArr is the props-name we pass, movies is the value*/}

      <Footer />
    </div>
  );
}

export default App;
