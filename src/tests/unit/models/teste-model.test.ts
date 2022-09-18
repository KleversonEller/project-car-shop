import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/car.model';
import { Model } from 'mongoose';
import { mockCreate } from '../mock.car.model';

const { expect } = chai;

describe('Cars Model', () => {
  const carModel = new  CarsModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(mockCreate);
  });

  after(()=>{
    sinon.restore();
  })

  it('Success create', async () => {
    const result = await carModel.create(mockCreate);
    expect(result).to.be.deep.equal(mockCreate);
  });

});