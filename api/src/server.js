// Koa things:
const Koa = require("koa");
const logger = require("koa-logger");
const cors = require("@koa/cors");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const session = require("koa-session");
const passport = require("koa-passport");
// --
const app = new Koa();
const db = require("./db");

// -- Routes -------------------------------------------------------------------

const api = "/api";

router
  .get(`${api}/ping`, async ctx => ctx.body = "ping")
  .get(`${api}/submissions`, getTalkProposals)
  .post(`${api}/speaker-submission`, createTalkProposal)
  .post(`${api}/auth/login`, login)
  .post(`${api}/auth/register`, register);

// -- Middleware ---------------------------------------------------------------
/* NOTE: beware the order of middleware borking things. ಠ_ಠ */

app.keys = ["super-secret-key"]; // for sessions
app.use(session(app));

require('./auth'); // todo - write this auth
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(logger());

// -- Handlers -----------------------------------------------------------------

async function createTalkProposal(ctx) {
  // TODO validate ctx.request.body for proper fields for submissions.
  const speakerSubmissionForm = ctx.request.body;
  try {
    const rdata = await db.speaker.createProposal(speakerSubmissionForm);
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
}

// I don't like these names yet.
async function getTalkProposals(ctx) {
  const proposals = await db.speaker.getProposals();
  ctx.body = {
    data: proposals
  };
}

async function login(ctx) {
  const loginCreds = ctx.request.body;
  try {
    const rdata = await db.speaker.createProposal(speakerSubmissionForm);
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
}

async function register(ctx) {
  // TODO validate ctx.request.body for proper fields for user.
  const user = await db.user.create(ctx.request.body);
  console.log("who's an ew user? ", user)
  return passport.authenticate("local", (err, user, info, status) => {
    if (user) {
      ctx.login(user);
      ctx.redirect("/auth/status");
    } else {
      ctx.status = 400;
      ctx.body = { status: "error" };
    }
  })(ctx);
}

app.listen(3001);
