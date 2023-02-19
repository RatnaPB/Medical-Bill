const request = require('supertest');
const app = require('./index');
const chai = require('chai');
var expect = chai.expect;;

describe('GET /items', () => {
  it('responds with an empty array', async () => {
    const response = await request(app).get('/items');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.eql([]);
  });
});

describe('POST /items', () => {
  it('creates a new medical bill', async () => {
    const bill = {
      patientName: 'John Doe',
      patientAddress: '123 Main St',
      hospitalName: 'General Hospital',
      dateOfService: '2022-02-19',
      billAmount: 1000
    };
    const response = await request(app)
      .post('/items')
      .send(bill);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.eql(bill);
  });
});