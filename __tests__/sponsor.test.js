import supertest from 'supertest';
import app from '../src';
import * as mocks from './__mocks___/sponsor';
import { SUCCESS, GET_FARM, LOGIN_SUCCESS } from '../src/utils/constant';

let userToken;
const request = supertest(app);

describe('SIGNUP A SPONSOR', () => {
  it('should create new sponsor', (done) => {
    request
      .post(mocks.signUpUrlSponsor)
      .send(mocks.newSponsor)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toEqual(SUCCESS);
        done();
      });
  });
});
describe('authenticate Users', () => {
  beforeAll((done) => {
    request
      .post(mocks.loginUrlSponsor)
      .send(mocks.sponsorLogin)
      .end((err, res) => {
        userToken = res.body.jwtToken;
        if (err) done(err);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual(LOGIN_SUCCESS);
        done();
      });
  });
  describe('GET ONE FARM', () => {
    it('It should get one farm', (done) => {
      request
        .get(mocks.getOneFarmUrl)
        .set('authorization', userToken)
        .end((err, res) => {
          expect(res.statusCode).toEqual(200);
          expect(res.body.message).toEqual(GET_FARM);
          done();
        });
    });
  });
  describe('GET All FARM', () => {
    it('It should get all farm', (done) => {
      request
        .get(mocks.getAllFarmUrl)
        .set('authorization', userToken)
        .end((err, res) => {
          expect(res.statusCode).toEqual(200);
          expect(res.body.message).toEqual(GET_FARM);
          done();
        });
    });
  });
});
