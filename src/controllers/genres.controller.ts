import express from 'express';

import * as genresServices from '../services/genres.service'

const getGenres = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {

    try {
         res.json(await genresServices.loadGenres())
        
    } catch (err) {
        next(err);
    }

}

export { getGenres };