import "./Main.css";
import Movie from "./Movie";


export default function Main(props) {
//  const [movies, setMovies] = useState(moviesArr);

  return (
    <section className="Main">

      {props.moviesArr.map((movie, index) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            imgURL={movie.imgURL}
            genres={movie.genres?.join(", ")}
            // optional chaining operator
          />
        );
      })}
    </section>
  );
}
