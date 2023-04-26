/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('payment', function(table) {
    table.increments('id');
    table.integer('order_id').unsigned().notNullable();
    table.foreign('order_id').references('id').inTable('order');
    table.timestamp('payment_date').notNullable();
    table.decimal('payment_amount', 8, 2).unsigned().notNullable();
    table.string('payment_method', 20).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('payment');
};
