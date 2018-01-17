/**
 * This is our application schema. Avoid using migrations to define our schema
 * until we are a) in production b) have test data we don't want to lose by relying on seeds.
 */

const knexfile = require('./knexfile.js');
const knex = require('knex')(knexfile.development);

const schema = {
  // A submission (also seen as "proposal") is an object describing a "talk" a speaker would like to present / pitch.
  submissions: () => knex.schema.createTableIfNotExists("submissions", table => {
    table.increments();
    table.string("name");
    table.string("email");
    table.string("topics");
    table.string("bio");
    table.timestamps(true, true);
  }),

  // Users are people who use the site in an authenticated manner.
  // Example: Those who are reviewing speaker submissions need to authenticate to do so.
  // Users may expand to involve auth for those who submit or other future facing features.
  users: () => knex.schema.createTableIfNotExists("users", table => {
    table.increments();
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
  })
};


Object.keys(schema).forEach(key => {
  schema[key]()
    .then(() => console.log(`${key} table created.`))
    .catch((e) => console.log(`There was an error creating the ${key} table:`, "\n", e));
})



