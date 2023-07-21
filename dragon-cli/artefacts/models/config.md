/**
 * @file <name> environment configuration.
 * @author  
 */

/**
 * Application Environment Configuration
 * @namespace endpoints/<name>/config
 * @property {module:<name>} Module 
 * @requires dotenv
 * @requires fs
 * @requires path
 */

/**
 * @description Environment
 * - Module
 */
require('dotenv').config()

/**
 * @description File System
 * - Module
 */
const fs = require("fs");

/**
 * @description Path
 * - Module
 */
const path = require('path');

/**
 * @description Application Environment Configuration Valirables
 * @module <name>
 * @example
 * 
 */
module.exports = {
}