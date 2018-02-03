/**
 * this file handles the db funcs and http handlers for users
 * This will be broken into a folder and seperated when it grows big enough.
 */

const knexfile = require("../db/knexfile.js");
const knex = require("knex")(knexfile.development);
const bcrypt = require("bcryptjs");
const passport = require("koa-passport");

// -- DB Functions --

const db = {
  getById(id) {
    return knex("users").where({ id }).first();
  },

  getByEmail(email) {
    return knex("users").where({ email }).first();
  },

  create(newUser) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(newUser.password, salt);
    return knex("users")
      .insert({
        username: newUser.username,
        email: newUser.email,
        password: hash
      })
      .returning("*");
  }
};

// -- HTTP Handlers --

const handle = {

  async login(ctx) {
    const loginCreds = ctx.request.body;
    return passport.authenticate("local", (err, user, info, status) => {
      if (user) {
        ctx.login(user);
        ctx.status = 200;
        ctx.body = {
          data: "'login' was successful. You're not actually logged in though because I haven't built sessions + auth + auth + all the stuff LORDY LOU"
        };
      } else {
        ctx.status = 400;
        ctx.body = { status: "error" };
      }
    })(ctx);
  },


  async register(ctx) {
    // TODO validate ctx.request.body for proper fields for user.
    const user = await db.create(ctx.request.body);
    console.log("who's a new user? ", user);
    return passport.authenticate("local", (err, user, info, status) => {
      if (user) {
        ctx.login(user);
        ctx.status = 200;
        ctx.body = {
          data: user // res will change of course.
        };
        ctx.redirect("/auth/status");
      } else {
        ctx.status = 400;
        ctx.body = { status: "error" };
      }
    })(ctx);
  }
};


module.exports = {
  db,
  handle
};
