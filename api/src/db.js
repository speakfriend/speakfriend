/**
 * Import the DB and setup it for being used by the src files.
 * This could also be a good place for db helpers.
 */

const knexfile = require("../db/knexfile.js");
const knex = require("knex")(knexfile.development);
const bcrypt = require("bcryptjs");

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
    return knex("users").where({ id }).first();
  },

  getByEmail(email) {
    return knex("users").where({ email }).first();
  },

  create(newUser) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(newUser.password, salt);
    return knex("users").insert({
      username: newUser.username,
      email: newUser.email,
      password: hash,
    }).returning("*");
  }
};

module.exports = {
  speaker,
  user
};
