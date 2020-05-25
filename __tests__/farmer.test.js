import supertest from 'supertest';
import app from '../src';
import * as mocks from './__mocks___/farmer';

import {
  SUCCESS, LOGIN_SUCCESS, FARM_SUCCESS, NOT_ACTIVATED, NO_FARM, UPDATE_FARM, GET_FARM
} from '../src/utils/constant';

const request = supertest(app);
let user;
let farmerToken;
describe('FARMER API', () => {
  it('should create new user as farmer', (done) => {
    request
      .post(mocks.signUpURl)
      .send(mocks.newFarmer)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toEqual(SUCCESS);
        done();
      });
  });
  it('Should signIn as farmer', (done) => {
    request
      .post(mocks.loginURL)
      .send(mocks.farmerLogin)
      .end((err, res) => {
        farmerToken = res.body.jwtToken;
        if (err) done(err);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual(LOGIN_SUCCESS);
        done();
      });
  });
  it('Should create a new farm', (done) => {
    request
      .post(mocks.farmURL)
      .set('authorization', farmerToken)
      .send(mocks.createFarm)
      .end((err, res) => {
        if (err) done(err);
        user = res.body.data;
        console.log('>>>>>wee', user);
        if (!user) {
          expect(res.statusCode).toEqual(401);
          expect(res.body.message).toEqual(NOT_ACTIVATED);
          done();
        } else {
          expect(res.statusCode).toEqual(201);
          expect(res.body.message).toEqual(FARM_SUCCESS);
          done();
        }
      });
  });
  it('Should edit a farm', (done) => {
    request
      .patch(`/api/v1/farm/${user.id}/editFarm`
      )
      .set('authorization', farmerToken)
      .send(mocks.updateFarm)
      .end((err, res) => {
        console.log('>>>>>edit>>', res)
        if (err) done(err);
        const { data } = res.body;
        if (!data) {
          expect(res.statusCode).toEqual(404);
          expect(res.body.message).toEqual(NO_FARM);
          done();
        } else {
          expect(res.statusCode).toEqual(200);
          expect(res.body.message).toEqual(UPDATE_FARM);
          done();
        }
      });
  });
  it('Should retrieve a farm', (done) => {
    request
      .get(`/api/v1/farm/${user.id}/getOneFarm`)
      .end((err, res) => {
        if (err) done(err);
        const { data } = res.body;
        if (!data) {
          expect(res.statusCode).toEqual(404);
          expect(res.body.message).toEqual(NO_FARM);
          done();
        } else {
          expect(res.statusCode).toEqual(200);
          expect(res.body.message).toEqual(GET_FARM);
          done();
        }
      });
  });
});
