/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('OptionProduct', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description');
    table.decimal('price').notNullable();
    table.string('type').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('OptionProduct');
};
