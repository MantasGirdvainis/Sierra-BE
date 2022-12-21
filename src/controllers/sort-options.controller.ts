import express from 'express';

import * as sortoptions from '../services/sort-options.service'

const getSortOptions = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {

    try {
         res.json(await sortoptions.getSortOptions())
        
    } catch (err) {
        next(err);
    }

};

export { getSortOptions };
