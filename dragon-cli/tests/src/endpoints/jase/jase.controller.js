/**
 * @file Process Requests from <a href="endpoints_device_routes.html"> Routed </a> endpoind. Returns request response. Request is processed by <a href="endpoints_jase_service.html"> Service </a> layer
 * @author 
 */

/** 
 * jase Controller
 * @namespace endpoints/jase/controller
 * @requires ./jase.service
 * @requires ../../app-packages/logger
 */

 /**
 * @description jase Service
 * Object
 * @type {object}
 */
const jaseService = require('./jase.service');

/**
 * @description Application Logger
 * Object
 * @type {object}
 */
const logger = require('../../app-packages/logger')

/**
 * api/ [GET] 
 * @memberof endpoints/jase/controller
 * @param {Express.req} req Endpoind Request
 * @param {Express.res} res Endpoind Response
 * @param {Express.next} next Next Call
 */
async function get(req, res, next) {
    try {
        res.json(await jaseService.getAll())
    } catch (err) {
        logger.error(`jase: Error: ${err.message}`);
        res.status(400).end();
    }
}

/**
 * api/ [POST] 
 * @memberof endpoints/jase/controller
 * @param {Express.req} req Endpoind Request
 * @param {Express.res} res Endpoind Response
 * @param {Express.next} next Next Call
 */
async function post(req, res, next) {
    try {
        res.json(await jaseService.METHOD(req.body))
    } catch (err) {
        logger.error(`jase: Error : ${err.message}`);
        res.status(400).end();
    }
}

/**
 * @description jase Controller
 * @module jase
 * @example
 * // get
 * const jaseController = require('./jase.controller');
 * let jases = jaseController.get()
 */
module.exports = { get }