import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/authMiddleware';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Privates routes
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
