import supertest from 'supertest';
import app from '../src';
import * as mocks from './__mocks___/product';

import {
  LOGIN_SUCCESS, PRODUCT_SUCCESS, UPDATE_PRODUCT, FIND_PRODUCT, NO_FARM_PRODUCT,
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
        done();
      });
  });
  it('Should edit product details', (done) => {
    request
      .patch(mocks.editUrl)
      .send(mocks.editProduct)
      .set('authorization', farmerToken)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual(UPDATE_PRODUCT);
        done();
      });
  });
  it('Should get farm product', (done) => {
    request
      .get(mocks.getUrl)
      .end((err, res) => {
        if (err) done(err);
        const { data } = res.body;
        if (data) {
          expect(res.statusCode).toEqual(200);
          expect(res.body.message).toEqual(FIND_PRODUCT);
          done();
        } else {
          expect(res.statusCode).toEqual(404);
          expect(res.body.message).toEqual(NO_FARM_PRODUCT);
          done();
        }
      });
  });
  it('Should get farm product by product name', (done) => {
    request
      .get(mocks.baseUrl)
      .send(mocks.fetchByName)
      .end((err, res) => {
        if (err) done(err);
        const { data } = res.body;
        if (data) {
          expect(res.statusCode).toEqual(200);
          expect(res.body.message).toEqual(FIND_PRODUCT);
          done();
        } else {
          expect(res.statusCode).toEqual(404);
          expect(res.body.message).toEqual(NO_FARM_PRODUCT);
        }
      });
  });
});
