/**
 * This is our application schema. Avoid using migrations to define our schema
 * until we are a) in production b) have test data we don't want to lose by relying on seeds.
 */

const knexfile = require('./knexfile.js');
const knex = require('knex')(knexfile.development);

const schema = {
  submissions: () => knex.schema.createTableIfNotExists("submissions", table => {
    table.increments();
    table.string("name");
    table.string("email");
    table.string("topics");
    table.string("bio");
    table.timestamps(true, true);
  })
};


Object.keys(schema).forEach(key => {
  schema[key]()
    .then(() => console.log(`${key} table created.`))
    .catch((e) => console.log(`There was an error creating the ${key} table:`, "\n", e));
})



