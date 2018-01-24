/**
 * Import the DB and setup it for being used by the src files.
 * This could also be a good place for db helpers.
 */

const knexfile = require("../db/knexfile.js");
const knex = require("knex")(knexfile.development);

// speaker queries
const speaker = {
  getProposals() {
    return knex("submissions").select("*");
  },

  createProposal(payload) {
    return knex("submissions").insert(payload);
  }
};


const user = {
  getById(id) {
    return knex("users").where({id}).first()
  },

  getByUsername(username) {
    return knex("users").where({username}).first()
  },

  create(payload) {
    return knex("users").insert(payload).returning("*")
  }
}

module.exports = {
  speaker,
  user
};
