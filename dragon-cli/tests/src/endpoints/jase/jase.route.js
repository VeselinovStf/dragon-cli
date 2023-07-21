/**
 * @file Process Requests from client. Returns request response. <a href="app-package_token_jwt-auth-middleware.html"> Authenticated </a> endpoind. Request are passed to <a href="endpoints_jase_controller.html"> jase Controller </a>
 * @author
 */

/** 
 * jase Routes
 * @namespace endpoints/jase/routes 
 * @property {module:jase} Module 
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
 * @description jase Controller
 * - Module
 */
const jaseController = require('./jase.controller');

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
 * @description jase Router
 * @module jase
 * @example
 * // get
 * const express = require('express');
 * const app = express();
 * app.use('/api/jase',require('../endpoints/jase/jase.route'));
 * app.listed();
 * // [GET] / - HEADERS: Authorization Barear <token>
 * // [GET] /:userId - HEADERS: Authorization Barear <token>, Request Parameters userId
 */
module.exports = router;