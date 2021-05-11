import React from "react";

const MovieView = ({ movie, number, nomination }) => {

    return(
       
        <div className="card border-primary p-3 m-4" style={{width: "30rem"}}>
        <div className="card-header bg-info">{number}</div>
        <div className="card-body">
          <h4 className="card-title">{movie.Title}</h4>
          <p>
          Released in {movie.Year}
          </p>
        <button className="btn btn-primary" value={[movie.Title, parseInt(movie.Year)]} onClick={(e) => nomination(e.target.value)}>Nominate</button>
        </div>
      </div>
    )
}

export default MovieView
