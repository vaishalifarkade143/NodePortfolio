import express from 'express';
import { homeController,contactUserController } from '../controllers/homecontroller.js';

const routes = express.Router();
routes.get('/',homeController);
routes.post('/contact' ,contactUserController);

export default routes;