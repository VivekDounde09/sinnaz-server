'use strict';

/**
 * calculate-your-need service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calculate-your-need.calculate-your-need');
