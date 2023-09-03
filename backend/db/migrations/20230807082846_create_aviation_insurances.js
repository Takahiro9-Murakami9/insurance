/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('aviation_insurances', function(table){
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('coverage_details').notNullable();
    table.text('coverage_details_01').notNullable();
    table.text('coverage_details_02').notNullable();
    table.text('coverage_details_03').notNullable();
    table.text('coverage_limit').notNullable();
    table.text('special_conditions').notNullable();
    table.text('premium').notNullable();
    table.text('image').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('aviation_insurances');
};
