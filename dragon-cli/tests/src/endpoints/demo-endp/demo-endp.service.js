/**
 * @file Responsible for Bussiness logic with 
 * @author VeselinovStf 
 */

/** 
 *  Service
 * @namespace endpoints/demo-endp/service
 * @property {module:demo-endp} Module 
 * @requires ./demo-endp.repository
 * @requires mongodb
 */

/**
 * @description demo-endp Repository
 * - Module
 */
const demo-endpRepository = require('./demo-endp.repository');

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
 * @memberof endpoints/demo-endp/service
 * @returns Response Model
 */
async function getAll() {
    try {
        var demo-endps = await demo-endpRepository.demo-endpDevices();

        if (!demo-endps) {
            logger.warn(`Can't Get demo-endps from database source!`);

            return responseModel.createResponse(false, 'demo-endp Error', 404);
        }

        return responseModel.createResponse(true, 'Returning demo-endp', 200, demo-endps);
    } catch (error) {
        logger.error(`Get All demo-endp Error: ${error.message}`);

        return responseModel.createResponse(false, 'demo-endp Error', 404);
    }
}

/**
 * Get all filtered by id
 * @param {Express.req} req Request with User Id for device
 * @memberof endpoints/demo-endp/service
 * @returns Response Model
 */
async function getAllById(req) {
    try {
        let inputId = req.params.inputId;

        if (!inputId || inputId.length <= 0) {
            logger.warn(`Get All demo-endp by Id: ${inputId} : Invalid Id`);

            return responseModel.createResponse(false, 'demo-endp Not Found', 404);
        }

        // Validate inputId before Query
        let validinputId = new ObjectId(inputId);

        var userDevices = await demo-endpRepository.getAllByinputId(validinputId);

        if (!userDevices) {
            logger.warn(`Can't Get demo-endp by User Id: ${inputId}, from Database`);

            return responseModel.createResponse(false, 'demo-endp Error', 404);
        }

        return responseModel.createResponse(true, 'Returning User demo-endp', 200, userDevices);
    } catch (error) {
        logger.error(`Get All demo-endp by User Id: ${inputId} : Error: ${error.message}`);

        return responseModel.createResponse(false, 'User demo-endp Error', 404);
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