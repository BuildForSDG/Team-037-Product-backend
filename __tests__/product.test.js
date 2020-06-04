import supertest from 'supertest';
import app from '../src';
import * as mocks from './__mocks___/product';

import {
  LOGIN_SUCCESS, PRODUCT_SUCCESS
} from '../src/utils/constant';

const request = supertest(app);
let farmerToken;
describe('FARM PRODUCT API', () => {
  it('Should signIn as farmer', (done) => {
    request
      .post(mocks.signInURl)
      .send(mocks.farmerLogin)
      .end((err, res) => {
        farmerToken = res.body.jwtToken;
        console.log('>>>>>>', farmerToken);
        console.log('>>>>>>res', res);

        if (err) done(err);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual(LOGIN_SUCCESS);
        done();
      });
  });
  it('Should create new product', (done) => {
    request
      .post(mocks.productUrl)
      .send(mocks.newProduct)
      .set('authorization', farmerToken)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toEqual(PRODUCT_SUCCESS);
        done()
      });
  });
});
