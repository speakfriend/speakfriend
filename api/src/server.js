const Koa = require("koa");
const logger = require("koa-logger");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const app = new Koa();
const db = require("./db");

// -- Middleware ---------------------------------------------------------------

app.use(bodyParser());
app.use(logger());

// -- Routes -------------------------------------------------------------------

const api = "/api";

router
  .get(`${api}/ping`, async ctx => ctx.body = "ping")
  .get(`${api}/submissions`, getTalkProposals)
  .post(`${api}/speaker-submission`, createTalkProposal);

app.use(router.routes());

// -- Handlers -----------------------------------------------------------------

async function createTalkProposal(ctx) {
  // submit to db and send back a success / failure res.
  ctx.body = { data: "TODO" };
}

// I don't like these names yet.
async function getTalkProposals(ctx) {
  const proposals = await db("submissions").select("*");
  ctx.body = {
    data: proposals
  };
}

app.listen(3001);
