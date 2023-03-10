import { Model, isValidObjectId } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import PersonalError from '../util/personal.error';

export default abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;
  private static _message = 'Invalid ID !';

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create(obj);
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new PersonalError(400, MongoModel._message);
    return this._model.findOne({ id });
  }

  public async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) throw new PersonalError(400, MongoModel._message);
    return this._model.findByIdAndUpdate({ id }, { obj });
  }

  public async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new PersonalError(400, MongoModel._message);
    return this._model.findByIdAndDelete({ id });
  }
}