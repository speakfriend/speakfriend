const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync("password", salt);

  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1,
         username: 'root',
         email: "root@root.com",
         password: hash
        },
      ]);
    });
};
