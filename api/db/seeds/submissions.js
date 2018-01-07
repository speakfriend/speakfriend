exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('submissions').del()
    .then(function () {
      // Inserts seed entries
      return knex('submissions').insert([
        {id: 1,
         name: 'jane',
         email: "jane@infinitedaylight.biz ",
         topics: "prisms, spacerings, autonomous dreaming",
         bio: "I'm built backwards by the momentum of my fevers. I'm the inversion of your catatonic nightmares."
        },
      ]);
    });
};
