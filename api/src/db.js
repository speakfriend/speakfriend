/**
 * Import the DB and setup it for being used by the src files.
 * This could also be a good place for db helpers.
 */

const knexfile = require('../db/knexfile.js');
const knex = require('knex')(knexfile.development);

module.exports = knex;
