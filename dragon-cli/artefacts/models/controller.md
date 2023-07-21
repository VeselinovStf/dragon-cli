/**
 * @file Process Requests from <a href="endpoints_device_routes.html"> Routed </a> endpoind. Returns request response. Request is processed by <a href="endpoints_<name>_service.html"> Service </a> layer
 * @author 
 */

/** 
 * <name> Controller
 * @namespace endpoints/<name>/controller
 * @requires ./<name>.service
 * @requires ../../app-packages/logger
 */

 /**
 * @description <name> Service
 * Object
 * @type {object}
 */
const <name>Service = require('./<name>.service');

/**
 * @description Application Logger
 * Object
 * @type {object}
 */
const logger = require('../../app-packages/logger')

/**
 * api/ [GET] 
 * @memberof endpoints/<name>/controller
 * @param {Express.req} req Endpoind Request
 * @param {Express.res} res Endpoind Response
 * @param {Express.next} next Next Call
 */
async function get(req, res, next) {
    try {
        res.json(await <name>Service.getAll())
    } catch (err) {
        logger.error(`<name>: Error: ${err.message}`);
        res.status(400).end();
    }
}

/**
 * api/ [POST] 
 * @memberof endpoints/<name>/controller
 * @param {Express.req} req Endpoind Request
 * @param {Express.res} res Endpoind Response
 * @param {Express.next} next Next Call
 */
async function post(req, res, next) {
    try {
        res.json(await <name>Service.METHOD(req.body))
    } catch (err) {
        logger.error(`<name>: Error : ${err.message}`);
        res.status(400).end();
    }
}

/**
 * @description <name> Controller
 * @module <name>
 * @example
 * // get
 * const <name>Controller = require('./<name>.controller');
 * let <name>s = <name>Controller.get()
 */
module.exports = { get }