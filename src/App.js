import "./App.css";
import { useState } from "react";
import moviesArr from "./data/movies.json";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [movies, setMovies] = useState(moviesArr);
  //  const [moviesDisplayed, setMoviesDisplayed] = useState(0)

  const displayTopRated = () => {
    const newList = movies.filter((element) => {
      return element.rating > 8;
    });
    setMovies(newList);
  };

  return (
    <div className="App">
      <Header numberOfMovies={movies.length} />
      {/* if only pass 1 information, you can already name it here */}

      <Controls moviesArr={movies} displayTopRated={displayTopRated} />

      <Main moviesArr={movies} />
      {/* moviesArr is the props-name we pass, movies is the value*/}

      <Footer />
    </div>
  );
}

export default App;
