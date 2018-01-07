const Koa = require("koa");
const logger = require("koa-logger");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const app = new Koa();

// -- Middleware ---------------------------------------------------------------

app.use(bodyParser());
app.use(logger());

// -- Routes -------------------------------------------------------------------

const api = "/api";

router
  .get(`${api}/ping`, async ctx => ctx.body = "pong!")
  .post(`${api}/speaker-submission`, speakerSubmission);

app.use(router.routes());

// -- Handlers -----------------------------------------------------------------

async function speakerSubmission(ctx) {
  // submit to db and send back a success / failure res.
  ctx.body = { data: "TODO" };
}

app.listen(3001);
