/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('product', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.decimal('price').notNullable();
    table.string('type').notNullable();
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('product');
};
