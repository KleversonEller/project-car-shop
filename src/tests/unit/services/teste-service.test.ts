import * as sinon from 'sinon';
import chai from 'chai';
import { ZodError } from 'zod';
import CarsModel from '../../../models/car.model';
import CarsService from '../../../services/car.service';
import { mockCreate } from '../mock.car.model';
import { ICar } from '../../../interfaces/ICar';

const { expect } = chai;

describe('Cars Service', () => {
    const carModel = new CarsModel();
    const carService = new CarsService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(mockCreate);
  });

  after(()=>{
    sinon.restore();
  })

  it('Success create', async () => {
    const result = await carService.create(mockCreate);
    expect(result).to.be.deep.equal(mockCreate);
  });

  it('Failed create', async () => {
    let err;

    try {
        await carService.create({} as ICar);
    } catch (error) {
        err = error
    }

    expect(err, 'Fields is invalid !').not.to.be.undefined;
  });

});