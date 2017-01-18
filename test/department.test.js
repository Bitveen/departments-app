'use strict';


/**
 * Model and connection
 * 
 */
const sequelize  = require('../config/db');
const Department = sequelize.import(__dirname + '/../models/department');
const expect     = require('chai').expect;


describe('Department model', () => {
    describe('validation', () => {
        
        it('should not save department when name not provided(null or empty)', function* () {
            
        });

        it('should not update existing department when name not provided(null or empty)', function* () {
            
        });
    });




});

