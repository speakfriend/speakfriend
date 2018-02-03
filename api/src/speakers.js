/**
 * this file handles the db funcs and http handlers for SPEAKERS.
 * This will be broken into a folder and seperated when it grows big enough.
 */

const knexfile = require("../db/knexfile.js");
const knex = require("knex")(knexfile.development);

// -- DB Functions --

const db = {
  getProposals() {
    return knex("submissions").select("*");
  },

  createProposal(payload) {
    // TODO: validation
    return knex("submissions").insert(payload);
  }
};

// -- HTTP Handlers --

const handle = {
  async createTalkProposal(ctx) {
    // TODO validate ctx.request.body for proper fields for submissions.
    const speakerSubmissionForm = ctx.request.body;
    try {
      const rdata = await db.createProposal(speakerSubmissionForm);
      ctx.status = 201;
      ctx.body = {
        status: "success",
        data: "MUCH SUCCESS VERY WOW"
      };
    } catch (e) {
      ctx.status = 400;
      ctx.body = {
        status: "error",
        message: e.message || "Sorry, an error has occurred."
      };
    }
  },

  async getTalkProposals(ctx) {
    const proposals = await db.getProposals();
    ctx.body = {
      data: proposals
    };
  }
};

module.exports = {
  db,
  handle
};
