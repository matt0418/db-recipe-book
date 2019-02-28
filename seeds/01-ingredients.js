
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'ingredient 1'},
        {name: 'ingredien 2'},
        {name: 'ingredient 3'},
        {name: 'ingredient 4'},
        {name: 'ingredient 5'},
        {name: 'ingredient 6'},
        {name: 'ingredient 7'},
        {name: 'ingredient 8'},
        {name: 'ingredient 9'},
        {name: 'ingredient 10'},
      ]);
    });
};
