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
const users = require('./users');
const speakers = require('./speakers');


// -- Routes -------------------------------------------------------------------

const api = "/api";

router
  .get(`${api}/ping`, async ctx => ctx.body = "ping")
  .get(`${api}/submissions`, speakers.handle.getTalkProposals)
  .post(`${api}/speaker-submission`, speakers.handle.createTalkProposal)
  .post(`${api}/auth/login`, users.handle.login)
  .post(`${api}/auth/register`, users.handle.register);

// -- Middleware ---------------------------------------------------------------
/* NOTE: beware the order of middleware borking things. ಠ_ಠ */

app.keys = ["super-secret-key"]; // for sessions -- nothing yet.
app.use(session(app));

require('./auth');

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(logger());


app.listen(3001);
