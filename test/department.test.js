'use strict';


/**
 * Model and connection
 *
 */
const sequelize  = require('../config/db');
const Department = sequelize.import(__dirname + '/../models/department');
const expect     = require('chai').expect;


describe('Department model', function() {

    describe('validation', function() {

        it('should not save department when name not provided (null or empty)', function* () {
            // TODO
        });

        it('should save department when valid name provided', function* () {
            // TODO
        });


        it('should not update existing department when name not provided (null or empty)', function* () {
            // TODO
        });

        it('should update existing department when valid name is provided', function* () {
            // TODO
        });


    });

});
