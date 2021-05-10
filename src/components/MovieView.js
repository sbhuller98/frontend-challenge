import React from "react";

const MovieView = ({ movie, number }) => {

    return(
       
        <div className="card border-primary p-3 m-4" style={{width: "30rem"}}>
        <div className="card-header bg-info">{number}</div>
        <div className="card-body">
          <h4 className="card-title">{movie.Title}</h4>
          <p>
          Released in {movie.Year}
          </p>
          <a className="btn btn-outline-dark" href="#">Nominate Movie</a>
        </div>
      </div>
    )
}

export default MovieView
