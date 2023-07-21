/**
 * @file Responsible for Bussiness logic with 
 * @author VeselinovStf 
 */

/** 
 *  Service
 * @namespace endpoints/jase/service
 * @property {module:jase} Module 
 * @requires ./jase.repository
 * @requires mongodb
 */

/**
 * @description jase Repository
 * - Module
 */
const jaseRepository = require('./jase.repository');

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
 * @memberof endpoints/jase/service
 * @returns Response Model
 */
async function getAll() {
    try {
        var jases = await jaseRepository.jaseDevices();

        if (!jases) {
            logger.warn(`Can't Get jases from database source!`);

            return responseModel.createResponse(false, 'jase Error', 404);
        }

        return responseModel.createResponse(true, 'Returning jase', 200, jases);
    } catch (error) {
        logger.error(`Get All jase Error: ${error.message}`);

        return responseModel.createResponse(false, 'jase Error', 404);
    }
}

/**
 * Get all filtered by id
 * @param {Express.req} req Request with User Id for device
 * @memberof endpoints/jase/service
 * @returns Response Model
 */
async function getAllById(req) {
    try {
        let inputId = req.params.inputId;

        if (!inputId || inputId.length <= 0) {
            logger.warn(`Get All jase by Id: ${inputId} : Invalid Id`);

            return responseModel.createResponse(false, 'jase Not Found', 404);
        }

        // Validate inputId before Query
        let validinputId = new ObjectId(inputId);

        var userDevices = await jaseRepository.getAllByinputId(validinputId);

        if (!userDevices) {
            logger.warn(`Can't Get jase by User Id: ${inputId}, from Database`);

            return responseModel.createResponse(false, 'jase Error', 404);
        }

        return responseModel.createResponse(true, 'Returning User jase', 200, userDevices);
    } catch (error) {
        logger.error(`Get All jase by User Id: ${inputId} : Error: ${error.message}`);

        return responseModel.createResponse(false, 'User jase Error', 404);
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