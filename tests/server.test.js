const request = require('supertest');
const app = require('../server/index.js');

describe("Test the root path", () => {
  test("It should respond to the GET method", done => {
    request(app)
      .get('/')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test data retrieval for specific id", () => {
  test("It should return a data with the id = 1", done => {
    request(app)
      .get('/1')
      .then(res => {
        expect(res.body[0].id).toBe(1);
        done();
      });
  });
  test("It should return a data with the id = 23", done => {
    request(app)
      .get('/23')
      .then(res => {
        expect(res.body[0].id).toBe(23);
        done();
      });
  });
  test("It should return a data with the id = 47", done => {
    request(app)
      .get('/47')
      .then(res => {
        expect(res.body[0].id).toBe(47);
        done();
      });
  });
  test("It should return a data with the id = 97", done => {
    request(app)
      .get('/97')
      .then(res => {
        expect(res.body[0].id).toBe(97);
        done();
      });
  });
});