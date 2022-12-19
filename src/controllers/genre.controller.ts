import express from 'express';

import * as genreServices from '../services/genre.service'

const getGenre = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {

    try {
         res.json(await genreServices.getGenre())
        
    } catch (err) {
        next(err);
    }

}

export { getGenre };