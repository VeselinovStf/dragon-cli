/**
 * @file Process Requests from client. Returns request response. <a href="app-package_token_jwt-auth-middleware.html"> Authenticated </a> endpoind. Request are passed to <a href="endpoints_demo-endp_controller.html"> demo-endp Controller </a>
 * @author
 */

/** 
 * demo-endp Routes
 * @namespace endpoints/demo-endp/routes 
 * @property {module:demo-endp} Module 
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
 * @description demo-endp Controller
 * - Module
 */
const demo-endpController = require('./demo-endp.controller');

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
 * @description demo-endp Router
 * @module demo-endp
 * @example
 * // get
 * const express = require('express');
 * const app = express();
 * app.use('/api/demo-endp',require('../endpoints/demo-endp/demo-endp.route'));
 * app.listed();
 * // [GET] / - HEADERS: Authorization Barear <token>
 * // [GET] /:userId - HEADERS: Authorization Barear <token>, Request Parameters userId
 */
module.exports = router;