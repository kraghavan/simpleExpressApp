const assert = require('assert');
const nock = require('nock');
const supertest = require('supertest');
const app = require('../app');

// test GET endpoint without "Accept" header field
describe("GET /api without Headers", () => {
  before(() => {
    const output = {message: "hello, world"};
    const url = 'http://localhost:3000';
    let fake_api = nock(url)
        .get('/api')
        .reply(200, output);
    });

  describe("when NOT passing accept header", () => {
    it("should respond with a 200 status code", async () => {
      const response = await supertest(app).get('/api').send();
      assert.equal(response.statusCode, 200);
      const output = "<p> hello, world</p>"
      assert.equal(response.text, output);
    });
  });
  after(function(){
    nock.cleanAll();
  });
});

// test GET endpoint with "Accept" header field
describe("GET /api with Headers", () => {
  before(() => {
    const output = {message: "hello, world"};
    const url = 'http://localhost:3000';
    let fake_api = nock(url, {
      reqheaders: {
        'Accept': '*/*',
      },
    })
    .get('/api')
    .reply(200, output);
    });

  describe("when passing accept header", () => {
    it("should respond with a 200 status code", async () => {
      const response = await supertest(app).get('/api').set('Accept', '*/*').send();
      assert.equal(response.statusCode, 200);
      const output = "{\"message\":\"hello world\"}"
      assert.equal(response.text, output);
    });
  });
  after(function(){
    nock.cleanAll();
  });
});

// test POST endpoint is working
describe("POST /api with/without Headers (Dont Matter)", () => {
  before(() => {
    const output = {message: "hello, world"};
    const url = 'http://localhost:3000';
    let fake_api = nock(url, {
      reqheaders: {
        'Accept': '*/*',
      },
    })
    .post('/api')
    .reply(200, output);
    });

  describe("when passing accept header", () => {
    it("should respond with a 200 status code", async () => {
      const response = await supertest(app).post('/api').set('Accept', '*/*').send();
      assert.equal(response.statusCode, 200);
      const output = "{\"message\":\"hello world\"}"
      assert.equal(response.text, output);
    });
  });
  after(function(){
    nock.cleanAll();
  });
});