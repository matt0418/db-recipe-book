
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recIngre').del()
    .then(function () {
      // Inserts seed entries
      return knex('recIngre').insert([
        {rec_id: 1, ingre_id: 1},
        {rec_id: 1, ingre_id: 2},
        {rec_id: 1, ingre_id: 3},
        {rec_id: 2, ingre_id: 4},
        {rec_id: 2, ingre_id: 5},
        {rec_id: 2, ingre_id: 6},
        {rec_id: 3, ingre_id: 7},
        {rec_id: 3, ingre_id: 8},
        {rec_id: 3, ingre_id: 9},
        {rec_id: 4, ingre_id: 10},
        {rec_id: 4, ingre_id: 1},
        {rec_id: 4, ingre_id: 2},
        {rec_id: 5, ingre_id: 3},
        {rec_id: 5, ingre_id: 4},
        {rec_id: 5, ingre_id: 5},
        {rec_id: 6, ingre_id: 6},
        {rec_id: 6, ingre_id: 7},
        {rec_id: 6, ingre_id: 8},
        {rec_id: 7, ingre_id: 9},
        {rec_id: 7, ingre_id: 10},
        {rec_id: 7, ingre_id: 1}
      ]);
    });
};
