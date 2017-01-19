'use strict';

const supertest  = require('supertest');
const app        = require('../server');
const request    = supertest.agent(app.listen());
const sequelize  = require('../config/db');
const Department = sequelize.import('../models/department');

describe('API Departments', function() {

    let department = { name: 'New department' };

    before(function(done) {
        Department.destroy({ where: { name: ['New department', 'Another new department'] } })
            .then(function() {
                done();
            });
    });

    describe('POST /api/department', function() {
        it('should create new department', function (done) {
            request
                .post('/api/department')
                .send(department)
                .expect(201)
                .expect('Content-Type', /json/)
                .end(function(err, res) {
                    if (err) return done(err);
                    department = res.body;
                    done();
                });
        });
        //it('shouldn\'t create new department with invalid name', function () {});
    });


    describe('GET /api/department/:id', function() {
        it('should get one department by id', function (done) {
            request
                .get('/api/department/' + department.id)
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(/New department/)
                .end(done);
        });
        it('should set 404 status code when there is no department with given id', function (done) {
            request
                .get('/api/department/zzz')
                .expect(404)
                .expect('Content-Type', /json/)
                .end(done);
        });
    });




    describe('GET /api/departments', function() {
        it('should get all departments', function (done) {
            request
                .get('/api/departments')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(done);
        });
    });


    describe('PUT /api/department/:id', function() {
        it('should update an existing department', function (done) {
            request
                .put('/api/department/' + department.id)
                .send({ name: 'Another new department' })
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(/Another new department/)
                .end(function(err, res) {
                    if (err) return done(err);
                    department = res.body;
                    done();
                });
        });
        //it('shouldn\'t update an existing department with invalid name', function* () {});
    });


});
