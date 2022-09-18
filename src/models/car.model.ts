import { Schema, model as modelMongo } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './mongo.model';

const carSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

export default class CarsModel extends MongoModel<ICar> {
  constructor(model = modelMongo('Cars', carSchema)) {
    super(model);
  }
}