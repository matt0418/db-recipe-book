
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recIngre', function(tbl) {
      tbl.increments()

      tbl
        .integer('rec_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        
      tbl
        .integer('ingre_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE') 

      tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recIngre')
};
