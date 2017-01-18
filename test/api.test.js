'use strict';

const supertest = require('supertest');
const app       = require('../server');
const request   = supertest.agent(app.listen());


describe('API Departments', function() {


    describe('GET /api/departments', function() {
        it('should get all departments', function (done) {
            request
                .get('/api/departments')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(done);
        });
    });

    describe('GET /api/department/:id', function() {
        it('should get one department by id', function (done) {


        });
        it('should set 404 status code when there is no department with given id', function* () {});
    });

    // describe('create', function() {
    //     it('should create new department', function* () {});
    //     it('shouldn\'t create new department with invalid name', function* () {});
    // });
    //
    //
    // describe('update', function() {
    //     it('should update an existing department', function* () {});
    //     it('shouldn\'t update an existing department with invalid name', function* () {});
    // });


});












// const app = require('../server');
// const request = supertest.agent(app.listen());

// describe('API', () => {

//     describe('/departments', () => {

//         it('returns departments list', function* () {
//             const response = yield request.get('/departments').end();
//             expect(response.status).to.equal(200, response.text);
//             expect(response.body).to.be.an('array');
//             expect(response.body).to.have.length.above(1);
//         });


//     });


//     describe('CRUD', () => {
//         let id = null;

//         it('create department', function* () {
//             let department = {
//                 name: 'My new department for testing'
//             };
//             const response = yield request.post('/department').send(department).end();
//             expect(response.status).to.equal(201, response.text);
//             expect(response.body).to.be.an('object');
//             expect(response.body).to.contain.keys('id');
//             id = response.body.id;
//         });


//         it('update existing department by id', function* () {
//             let department = {
//                 name: 'My updated department'
//             };

//             const response = yield request.put('/department/' + id).send(department).end();
//             expect(response.status).to.equal(200, response.text);
//             expect(response.body).to.be.an('object');
//             expect(response.body).to.contain.keys('status');
//             expect(response.body.status).to.equal('OK');
//         });

//         it('getting existing department by id', function* () {
//             const response = yield request.get('/department/' + id).end();
//             expect(response.status).to.equal(200, response.text);
//             expect(response.body).to.be.an('object');
//             expect(response.body).to.contain.keys('id', 'name');
//             expect(response.body.id).to.equal(id);
//         });


//     });






// });
