'use strict';

/**
 * rpl service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rpl.rpl');
