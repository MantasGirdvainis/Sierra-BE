const converterToMovie = (tmdbMovie: TmdbMovie): Movie => {
  return {
    movieId: tmdbMovie.id,
    title: tmdbMovie.title,
    releaseDate: tmdbMovie.release_date,
    backdropPath: 'https://image.tmdb.org/t/p/w500' + tmdbMovie.backdrop_path,
    posterPath: 'https://image.tmdb.org/t/p/w500' + tmdbMovie.poster_path,
    voteAverage: tmdbMovie.vote_average,
  };
};

export { converterToMovie };
