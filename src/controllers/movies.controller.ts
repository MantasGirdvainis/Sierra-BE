import express from 'express';

const getMovies = (_req: express.Request, res: express.Response): void => {
  res.json({
    page: 1,
    totalPages: 1,
    movies: [
      {
        movieId: 550988,
        title: 'Free Guy',
        releaseDate: '2021-08-11',
        backdropPath: 'https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg',
        posterPath: 'https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg',
        voteAverage: 7.8,
      },
      {
        movieId: 335983,
        title: 'Venom',
        releaseDate: '2018-09-28',
        backdropPath: 'https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
        posterPath: 'https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        voteAverage: 6.8,
      },
      {
        movieId: 566525,
        title: 'Shang-Chi and the Legend of the Ten Rings',
        releaseDate: '2021-09-01',
        backdropPath: 'https://image.tmdb.org/t/p/w500/dNQTwFmEj1b5SktT8oWGH5Cunlx.jpg',
        posterPath: 'https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
        voteAverage: 7.8,
      },
      {
        movieId: 436969,
        title: 'The Suicide Squad',
        releaseDate: '2021-07-28',
        backdropPath: 'https://image.tmdb.org/t/p/w500/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg',
        posterPath: 'https://image.tmdb.org/t/p/w500/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg',
        voteAverage: 7.8,
      },
    ],
  });
};

const getMovie = (_req: express.Request, res: express.Response): void => {
  res.json({
    movieId: 566525,
    title: 'Shang-Chi and the Legend of the Ten Rings',
    releaseDate: '2021-09-01',
    backdropPath: 'https://image.tmdb.org/t/p/original/dNQTwFmEj1b5SktT8oWGH5Cunlx.jpg',
    posterPath: 'https://image.tmdb.org/t/p/original/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
    voteAverage: 7.8,
    budget: 150000000,
    genres: [
      {
        id: 28,
        name: 'Action',
      },
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 14,
        name: 'Fantasy',
      },
    ],
    homepage: 'https://www.marvel.com/movies/shang-chi-and-the-legend-of-the-ten-rings',
    originalLanguage: 'en',
    originalTitle: 'Shang-Chi and the Legend of the Ten Rings',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    productionCompanies: [
      {
        id: 420,
        logoPath: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
        name: 'Marvel Studios',
        originCountry: 'US',
      },
    ],
    productionCountries: [
      {
        iso: 'US',
        name: 'United States of America',
      },
    ],
    revenue: 401000000,
    runtime: 132,
    spokenLanguages: [
      {
        englishName: 'English',
        iso: 'en',
        name: 'English',
      },
      {
        englishName: 'Mandarin',
        iso: 'zh',
        name: '普通话',
      },
    ],
    status: 'Released',
    tagline: "You can't outrun your destiny.",
    voteCount: 1259,
  });
};

export { getMovies, getMovie };
