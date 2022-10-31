const urlAndSize = 'https://image.tmdb.org/t/p/w500';
const logoUrl = 'https://image.tmdb.org/t/p/original';

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

const convertToProductionCompany = (tmdbProductionCompany: TmdbProductionCompany): ProductionCompany => {
  return {
    id: tmdbProductionCompany.id,
    logoPath: logoUrl + tmdbProductionCompany.logo_path,
    name: tmdbProductionCompany.name,
    originCountry: tmdbProductionCompany.origin_country,
  };
};

const convertToProductionCountry = (tmdbProductionCountry: TmdbProductionCountry): ProductionCountry => {
  return {
    iso: tmdbProductionCountry.iso_3166_1,
    name: tmdbProductionCountry.name,
  };
};

const convertToSpokenLanguage = (tmdbSpokenLanguage: TmdbSpokenLanguage): SpokenLanguage => {
  return {
    englishName: tmdbSpokenLanguage.english_name,
    iso: tmdbSpokenLanguage.iso_639_1,
    name: tmdbSpokenLanguage.name,
  };
};

const convertToMovieDetails = (tmdbMovieDetails: TmdbMovieDetails): MovieDetails => {
  return {
    ...convertToMovie(tmdbMovieDetails),
    backdropPath: logoUrl + tmdbMovieDetails.backdrop_path,
    budget: tmdbMovieDetails.budget,
    genres: tmdbMovieDetails.genres,
    homepage: tmdbMovieDetails.homepage,
    originalLanguage: tmdbMovieDetails.original_language,
    originalTitle: tmdbMovieDetails.original_title,
    overview: tmdbMovieDetails.overview,
    posterPath: logoUrl + tmdbMovieDetails.poster_path,
    productionCompanies: tmdbMovieDetails.production_companies.map(convertToProductionCompany),
    productionCountries: tmdbMovieDetails.production_countries.map(convertToProductionCountry),
    revenue: tmdbMovieDetails.revenue,
    runtime: tmdbMovieDetails.runtime,
    spokenLanguages: tmdbMovieDetails.spoken_languages.map(convertToSpokenLanguage),
    status: tmdbMovieDetails.status,
    tagline: tmdbMovieDetails.tagline,
    title: tmdbMovieDetails.title,
    voteCount: tmdbMovieDetails.vote_count,
  };
};

export { convertToMovie, convertToMovieDetails };
