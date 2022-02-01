import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movie, inputSearch, rating }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {movie
        ?.filter(
          (movie) =>
            movie.title.toLowerCase().includes(inputSearch.toLowerCase()) &&
            movie.rate >= rating
        )
        .map((film) => (
          <MovieCard x={film} key={film.id} />
        ))}
    </div>
  );
}

export default MovieList;
