
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'recipe for 1', dishes_id: 1},
        {name: 'recipe for 1 also', dishes_id: 1},
        {name: 'recipe for 2', dishes_id: 2},
        {name: 'recipe for 2 also', dishes_id: 2},
        {name: 'recipe for 3', dishes_id: 3},
        {name: 'recipe for 3 also', dishes_id: 3},
        {name: 'recipe for 4', dishes_id: 4}
      ]);
    });
};
