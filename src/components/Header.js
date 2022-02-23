import "./Header.css";

export default function Header(props) {

  return (
    <header className="Header">
      <h1> It's popcorn time</h1>
      <h3>The are {props.numberOfMovies} movies matching the criteria.</h3>
    </header>
  );
}
