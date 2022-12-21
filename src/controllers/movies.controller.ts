import express from 'express';
import validate from '../commons/title.validator';
import genresValidator from '../commons/genres.validator';

import * as movieService from '../services/movie.service';

const getMovies = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  try {
    let page: number = parseInt(_req.query.page as string)
    let title: string = _req.query.title as string
    let genres: string = _req.query.genres as string

    if (!page) {
      page = 1
    }

    if (title && validate(title)) {
      res.json(await movieService.searchMoviesByTitle(title, page))
    } else if (genres && genresValidator(genres)) {
      res.json(await movieService.searchMoviesByGenres(genres, page))
    } else {
      res.json(await movieService.getMovies(page));
    }

  } catch (err) {
    next(err);
  }
};

const getMovie = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  try {
    res.json(await movieService.getMovie(parseInt(req.params.movieId)));
  } catch (err) {
    next(err);
  }
};

export { getMovies, getMovie };
