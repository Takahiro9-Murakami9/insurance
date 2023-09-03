/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('car_insurances', function(table){
    table.increments('id').primary();
    table.string('title');
    table.text('coverage_details');
    table.text('coverage_details_01');
    table.text('coverage_details_02');
    table.text('coverage_datails_03');
    table.text('coverage_limit');
    table.text('special_conditions');
    table.text('premium');
    table.text('image');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('car_insurances');
};
