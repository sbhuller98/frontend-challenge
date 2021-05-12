import React from "react";
import MovieView from "./MovieView";

const MovieList = ({ movies, nominations }) => {
    let number = 0
    const increment = () => {
        return number = number + 1;
    }
    if (typeof movies === 'string') {
        console.log('test')
        return <h2>{movies}</h2>
    } else if (typeof movies.data === 'undefined') {
    return <h3>No results found</h3>
   
  } else if (movies.data.Response === "False") {
    return <h3>No results found</h3>;
  } else if (typeof movies.data.Search === 'undefined') {
      return <MovieView movie= {movies.data} />
  } else {
    const listItems = (movies.data.Search).map((movie) => (
      <MovieView key={movie.imdbID} movie={movie} number={increment()} nomination={nominations}/>
    ));

    return listItems ;
  }
};

export default MovieList;
