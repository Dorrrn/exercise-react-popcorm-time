import "./Controls.css"

export default function Controls(props) {

  return (

    <div className="Controls">
      <h3>Filters:</h3>
      <button onClick={ () => props.displayTopRated(8) } className="btn-top">
      {/* 8 is the minRating we pass as argument */}
        Rating > 8
      </button>
      <button onClick={ () => props.displayTopRated(9) } className="btn-top">
      {/* 8 is the minRating we pass as argument */}
        Rating > 9
      </button>
    </div>
  );
}
