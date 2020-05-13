import supertest from 'supertest';
import app from '../src/index';
import * as mocks from '../src/modules/auth/__mocks___/index';
import {
  SUCCESS, ALREADY_EXIST, LOGIN_SUCCESS, INVALID_USER
} from '../src/utils/constant';

const request = supertest(app);


describe('SIGNUP API', () => {
  it('should create new user', (done) => {
    request
      .post(mocks.baseUrl)
      .send(mocks.newUser)
      .end((err, res) => {
        if (err) done(err);
        const { data } = res.body;
        if (data) {
          expect(res.statusCode).toEqual(201);
          expect(res.body.message).toEqual(SUCCESS);
        } else {
          expect(res.statusCode).toEqual(409);
          expect(res.body.message).toEqual(ALREADY_EXIST);
        }
        done();
      });
  });
  it('should throw validation error firstName', (done) => {
    request
      .post(mocks.baseUrl)
      .send(mocks.emptyName)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(422);
        expect(res.body.message).toEqual('firstName can not be empty field');
        done();
      });
  });
  it('should throw validation error on phone', (done) => {
    request
      .post(mocks.baseUrl)
      .send(mocks.emptyPhone)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(422);
        expect(res.body.message).toEqual('phone must be a number');
        done();
      });
  });
});

describe('AUTH LOGIN IN API', () => {
  it('should login user', (done) => {
    request
      .post(mocks.baseUrlLogin)
      .send(mocks.loginUser)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual(LOGIN_SUCCESS);
      });
  });
  it('should login user', (done) => {
    request
      .post(mocks.baseUrlLogin)
      .send(mocks.wrongloginUser)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(401);
        expect(res.body.message).toEqual(INVALID_USER);
        done();
      });
  });
});
