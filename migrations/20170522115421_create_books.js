
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.string('image_url').notNullable();
    table.integer('released').notNullable();
    table.integer('likes').defaultTo(0);
    table.integer('dislikes').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
