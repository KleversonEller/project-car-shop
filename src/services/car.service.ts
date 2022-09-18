import { ICar, ICarSchema } from '../interfaces/ICar';
import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';
import PersonalError from '../util/personal.error';

export default class CarsService implements IService<ICar> {
  private _cars: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._cars = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const valid = ICarSchema.safeParse(obj);
    if (!valid.success) throw new PersonalError(400, 'Fields is invalid !');

    const result = await this._cars.create(obj);
    return result;
  }

  public async read(): Promise<ICar[]> {
    const result = await this._cars.read();
    return result;
  }
}