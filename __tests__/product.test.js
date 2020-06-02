import supertest from 'supertest';
import app from '../src';
import * as mocks from './__mocks___/product';

import {
  SUCCESS, LOGIN_SUCCESS, FARM_SUCCESS, NOT_ACTIVATED, NO_FARM, UPDATE_FARM, GET_FARM
} from '../src/utils/constant';

const request = supertest(app);

describe('FARM PRODUCT API', )
