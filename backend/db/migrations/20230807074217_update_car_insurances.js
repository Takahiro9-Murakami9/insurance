/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table('car_insurances', function (table) {
    table.string('title').alter().notNullable();
    table.text('coverage_details').alter().notNullable();
    table.text('coverage_details_01').alter().notNullable();
    table.text('coverage_details_02').alter().notNullable();
    table.text('coverage_details_03').alter().notNullable();
    table.text('coverage_limit').alter().notNullable();
    table.text('special_conditions').alter().notNullable();
    table.text('premium').alter().notNullable();
    table.text('image').alter().notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table('car_insurances', function (table) {
  });
};
