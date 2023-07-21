/**
 * @file Process Requests from <a href="endpoints_device_routes.html"> Routed </a> endpoind. Returns request response. Request is processed by <a href="endpoints_demo-endp_service.html"> Service </a> layer
 * @author 
 */

/** 
 * demo-endp Controller
 * @namespace endpoints/demo-endp/controller
 * @requires ./demo-endp.service
 * @requires ../../app-packages/logger
 */

 /**
 * @description demo-endp Service
 * Object
 * @type {object}
 */
const demo-endpService = require('./demo-endp.service');

/**
 * @description Application Logger
 * Object
 * @type {object}
 */
const logger = require('../../app-packages/logger')

/**
 * api/ [GET] 
 * @memberof endpoints/demo-endp/controller
 * @param {Express.req} req Endpoind Request
 * @param {Express.res} res Endpoind Response
 * @param {Express.next} next Next Call
 */
async function get(req, res, next) {
    try {
        res.json(await demo-endpService.getAll())
    } catch (err) {
        logger.error(`demo-endp: Error: ${err.message}`);
        res.status(400).end();
    }
}

/**
 * api/ [POST] 
 * @memberof endpoints/demo-endp/controller
 * @param {Express.req} req Endpoind Request
 * @param {Express.res} res Endpoind Response
 * @param {Express.next} next Next Call
 */
async function post(req, res, next) {
    try {
        res.json(await demo-endpService.METHOD(req.body))
    } catch (err) {
        logger.error(`demo-endp: Error : ${err.message}`);
        res.status(400).end();
    }
}

/**
 * @description demo-endp Controller
 * @module demo-endp
 * @example
 * // get
 * const demo-endpController = require('./demo-endp.controller');
 * let demo-endps = demo-endpController.get()
 */
module.exports = { get }