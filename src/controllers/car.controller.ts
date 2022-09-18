import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarsController {
  constructor(private service: IService<ICar>) {}

  async create(req: Request, res: Response) {
    const result = await this.service.create(req.body);
    return res.status(201).json(result);
  }

  async read(_req: Request, res: Response) {
    const result = await this.service.read();
    return res.status(200).json(result);
  }
}