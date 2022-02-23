import "./Controls.css"

export default function Controls(props) {

  return (

    <div className="Controls">
      <h3>Filters:</h3>
      <button onClick={props.displayTopRated} className="btn-top">
        Top Rated
      </button>
    </div>
  );
}
