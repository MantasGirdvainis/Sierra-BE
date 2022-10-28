const urlAndSize = 'https://image.tmdb.org/t/p/w500';

const convertToMovie = (tmdbMovie: TmdbMovie): Movie => {
  return {
    movieId: tmdbMovie.id,
    title: tmdbMovie.title,
    releaseDate: tmdbMovie.release_date,
    backdropPath: urlAndSize + tmdbMovie.backdrop_path,
    posterPath: urlAndSize + tmdbMovie.poster_path,
    voteAverage: tmdbMovie.vote_average,
  };
};

export { convertToMovie };
