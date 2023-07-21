/**
 * @file Process Requests from client. Returns request response. <a href="app-package_token_jwt-auth-middleware.html"> Authenticated </a> endpoind. Request are passed to <a href="endpoints_<name>_controller.html"> <name> Controller </a>
 * @author
 */

/** 
 * <name> Routes
 * @namespace endpoints/<name>/routes 
 * @property {module:<name>} Module 
 * @requires express
 * @requires express.Router()
 * @requires ./device.controller
 * @requires ../../app-packages/token/jwt.auth.middleware
 */

/**
 * @description Express
 * - Module
 */
const express = require('express')
/**
 * @description Express Router
 * - Module
 */
const router = express.Router();

/**
 * @description <name> Controller
 * - Module
 */
const <name>Controller = require('./<name>.controller');

/**
 * @description Authentication Middleware
 * - Module
 */
const authMiddleware = require('../../app-packages/token/jwt.auth.middleware');

/**
 * 
 */
router.get('/', authMiddleware, deviceController.get);

router.get('/:userId', authMiddleware, deviceController.getByUserId);

/**
 * @description <name> Router
 * @module <name>
 * @example
 * // get
 * const express = require('express');
 * const app = express();
 * app.use('/api/<name>',require('../endpoints/<name>/<name>.route'));
 * app.listed();
 * // [GET] / - HEADERS: Authorization Barear <token>
 * // [GET] /:userId - HEADERS: Authorization Barear <token>, Request Parameters userId
 */
module.exports = router;