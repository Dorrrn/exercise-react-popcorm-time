import "./Main.css";
import Movie from "./Movie";


export default function Main(props) {
//  const [movies, setMovies] = useState(moviesArr);

  return (
    <section className="Main">

      {props.moviesArr.map((movie) => {
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
