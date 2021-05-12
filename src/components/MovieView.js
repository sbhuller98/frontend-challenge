import React, { useState } from "react";

const MovieView = ({ movie, number, nomination }) => {
  const [isButtonClicakble, updateButton] = useState(false);
  return (
    <div className="card border-dark p-1 mx-5 my-1" style={{ width: "20rem" }}>
      <div className="card-body">
        <div style={{display: "inline-block"}}>
          <p style={{display: "inline"}}>{number}.</p>
          <h4 style={{display: "inline"}} className="card-title inline"> {movie.Title}</h4>
        </div>
        <p>Released in {movie.Year}</p>
        <button
          className="btn btn-outline-primary"
          value={[movie.Title, parseInt(movie.Year)]}
          disabled={isButtonClicakble}
          onClick={(e) => {
            nomination(e.target.value);
            updateButton(true);
          }}
        >
          Nominate
        </button>
      </div>
    </div>
  );
};

export default MovieView;
