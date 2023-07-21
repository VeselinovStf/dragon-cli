/**
 * @file Responsible for Bussiness logic with 
 * @author VeselinovStf 
 */

/** 
 *  Service
 * @namespace endpoints/<name>/service
 * @property {module:<name>} Module 
 * @requires ./<name>.repository
 * @requires mongodb
 */

/**
 * @description <name> Repository
 * - Module
 */
const <name>Repository = require('./<name>.repository');

/**
 * @description Response Model
 * Object
 * @type {object} {  success, message, data, status}
 */
const responseModel = require('../../app-packages/models/response.model');

/**
 * @description Application Logger
 * - Module
 */
const logger = require('../../app-packages/logger');

/**
 * @description MongoDb ObjectId
 * - Class
 */
const { ObjectId } = require('mongodb');

/**
 * Get all
 * @memberof endpoints/<name>/service
 * @returns Response Model
 */
async function getAll() {
    try {
        var <name>s = await <name>Repository.<name>Devices();

        if (!<name>s) {
            logger.warn(`Can't Get <name>s from database source!`);

            return responseModel.createResponse(false, '<name> Error', 404);
        }

        return responseModel.createResponse(true, 'Returning <name>', 200, <name>s);
    } catch (error) {
        logger.error(`Get All <name> Error: ${error.message}`);

        return responseModel.createResponse(false, '<name> Error', 404);
    }
}

/**
 * Get all filtered by id
 * @param {Express.req} req Request with User Id for device
 * @memberof endpoints/<name>/service
 * @returns Response Model
 */
async function getAllById(req) {
    try {
        let inputId = req.params.inputId;

        if (!inputId || inputId.length <= 0) {
            logger.warn(`Get All <name> by Id: ${inputId} : Invalid Id`);

            return responseModel.createResponse(false, '<name> Not Found', 404);
        }

        // Validate inputId before Query
        let validinputId = new ObjectId(inputId);

        var userDevices = await <name>Repository.getAllByinputId(validinputId);

        if (!userDevices) {
            logger.warn(`Can't Get <name> by User Id: ${inputId}, from Database`);

            return responseModel.createResponse(false, '<name> Error', 404);
        }

        return responseModel.createResponse(true, 'Returning User <name>', 200, userDevices);
    } catch (error) {
        logger.error(`Get All <name> by User Id: ${inputId} : Error: ${error.message}`);

        return responseModel.createResponse(false, 'User <name> Error', 404);
    }
}

/**
 * @description Device Service
 * @module device
 * @example
 * // getAll
 * const deviceService = require('./device.service');
 * let devices = await deviceService.getAll()
 * // getAllById
 * const deviceService = require('./device.service');
 * var inputId = req.params.inputId;
 * let userDevices = await deviceService.getAllById(inputId))
 * 
 */
module.exports = { getAll, getAllById }