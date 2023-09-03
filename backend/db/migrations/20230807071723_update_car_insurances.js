/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('car_insurances', function(table) {
    table.renameColumn('coverage_datails_03', 'coverage_details_03');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('car_insurances', function(table) {
    table.renameColumn('coverage_details_03', 'coverage_datails_03');
  });
};
