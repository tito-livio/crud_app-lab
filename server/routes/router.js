import express from 'express';
import { createUser, findUser, updateUser, deleteUser } from '../controller/controller.js';
import { homeRoutes, add_user, update_user, delete_user } from '../services/render.js';

const route = express.Router();

/**
 * @description This route is the main route for the application
 * @method GET /
 */
route.get('/', homeRoutes);

route.get('/add-user', add_user);

route.get('/update-user', update_user);

route.get('/delete-user', delete_user);

/**
 * @description These routes is the API route for the application
 * @methods GET/POST/PUT/DELETE for /api/user
 */
route.post('/api/user', createUser);

route.get('/api/user', findUser);

route.patch('/api/update/:id', updateUser);

route.delete('/api/delete/:id', deleteUser);

export default route;