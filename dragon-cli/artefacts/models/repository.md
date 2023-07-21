/**
 * @file 
 * @author  
 */

/** 
 * Device Repository
 * @namespace endpoints/<name>/repository 
 * @property {module:<name>} Module 
 * @requires ../../app-packages/db/db.data.mongodb
 * @requires dbContext.getDb()
 * @requires ./device.controller
 * @requires mongodb
 * @requires ../../app/app.config
 */

/**
 * @description DB Context
 * - Module
 */
const dbContext = require('../../app-packages/db/db.data.mongodb');

/**
 * @description Context
 * - Variable
 */
const dbConnect = dbContext.getDb();

/**
 * @description MongoDb ObjectId
 * - Class
 */
ObjectId = require('mongodb').ObjectId;

/**
 * @description Application Environment Provider
 * - Module
 */
const appConfigMod = require('../../app/app.config');
/**
 * Get all Devices
 * @memberof endpoints/<name>/repository
 * @param {string} userEmail 
 * @returns Found User
 */
async function findUser(userEmail) {
    return dbConnect
        .collection('users')
        .findOne({ 'email': userEmail, 'isLocked': false });
}

/**
 * @description <name> Repository
 * @module <name>
 * @example
 * 
 */
module.exports = {
    findUser
}