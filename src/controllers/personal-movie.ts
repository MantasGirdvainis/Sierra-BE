import express from 'express';
import * as personalMovieService from '../services/personal-movie.service';

const getPageNumber = (req: express.Request): number => (req.query.page ? parseInt(req.query.page as string) || 1 : 1);

const savePersonalMovie = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {

    try {
        const movie: Movie = {
            ...req.body,
            email: req.currentUserEmail
        };

        res.json(await personalMovieService.savePersonalMovie(movie));

    } catch (err) {
        next(err);
    }
};

const getPersonalMovies = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {

    try {
        res.json(await personalMovieService.getPersonalMovies(req.currentUserEmail, getPageNumber(req)));

    } catch (err) {
        next(err)
    };
};

export { savePersonalMovie, getPersonalMovies };

