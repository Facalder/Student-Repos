'use strict';

/**
 * dmm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dmm.dmm');
