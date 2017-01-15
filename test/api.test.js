'use strict';

const supertest = require('supertest');
const expect = require('chai').expect;

const app = require('../server');
const request = supertest.agent(app.listen());

describe('API', () => {

    describe('/departments', () => {

        it('returns departments list', function* () {
            const response = yield request.get('/departments').end();
            expect(response.status).to.equal(200, response.text);
            expect(response.body).to.be.an('array');
            expect(response.body).to.have.length.above(1);
        });


    });


    describe('CRUD', () => {
        let id = null;

        it('create department', function* () {
            let department = {
                name: 'My new department for testing'
            };
            const response = yield request.post('/department').send(department).end();
            expect(response.status).to.equal(201, response.text);
            expect(response.body).to.be.an('object');
            expect(response.body).to.contain.keys('id');
            id = response.body.id;
        });


        it('update existing department by id', function* () {
            let department = {
                name: 'My updated department'
            };

            const response = yield request.put('/department/' + id).send(department).end();
            expect(response.status).to.equal(200, response.text);
            expect(response.body).to.be.an('object');
            expect(response.body).to.contain.keys('status');
            expect(response.body.status).to.equal('OK');
        });

        it('getting existing department by id', function* () {
            const response = yield request.get('/department/' + id).end();
            expect(response.status).to.equal(200, response.text);
            expect(response.body).to.be.an('object');
            expect(response.body).to.contain.keys('id', 'name');
            expect(response.body.id).to.equal(id);
        });


    });






});
