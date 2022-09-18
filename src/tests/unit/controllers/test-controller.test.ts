import * as sinon from 'sinon';
import chai from 'chai';
import { Response, Request } from 'express';
import { mockCreate } from '../mock.car.model';
import CarsModel from '../../../models/car.model';
import CarsService from '../../../services/car.service';
import CarsController from '../../../controllers/car.controller';

const { expect } = chai;

describe('Cars Controller', () => {
    const carModel = new CarsModel();
    const carService = new CarsService(carModel);
    const carController = new CarsController(carService);

    const req = {} as Request;
    const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(mockCreate);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

  });

  after(()=>{
    sinon.restore();
  })

  it('Success create', async () => {
    req.body = mockCreate;

    await carController.create(req, res);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(mockCreate)).to.be.true;
  });

});