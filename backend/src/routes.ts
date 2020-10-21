import { Router } from 'express';

import ScoresController from './controllers/ScoresController';

const routes = Router();

routes.post('/score', ScoresController.create);
routes.get('/score', ScoresController.index);

export default routes;
