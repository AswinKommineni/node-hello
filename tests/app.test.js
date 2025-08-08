const http = require('http');
const request = require('supertest');
const app = require('../src/index');

describe('Hello World HTTP server', () => {
  it('responds with 200 and "Hello, World!" for GET /', async () => {
    const server = http.createServer(app);
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});


