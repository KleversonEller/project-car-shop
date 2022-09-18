import { Router } from 'express';
import CarsModel from '../models/car.model';
import CarsService from '../services/car.service';
import CarsController from '../controllers/car.controller';

const carRouter = Router();
const carModel = new CarsModel();
const carService = new CarsService(carModel);
const carController = new CarsController(carService);

carRouter.get('/cars', (req, res) => carController.read(req, res));
carRouter.post('/cars', (req, res) => carController.create(req, res));

export default carRouter;