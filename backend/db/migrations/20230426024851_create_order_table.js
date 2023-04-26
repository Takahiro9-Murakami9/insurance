/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('order', function(table) {
    table.increments('id');
    table.integer('customer_id').unsigned().notNullable();
    table.foreign('customer_id').references('id').inTable('users');
    table.integer('product_id').unsigned().notNullable();
    table.foreign('product_id').references('id').inTable('product');
    table.integer('option_product_id').unsigned();
    table.foreign('option_product_id').references('id').inTable('OptionProduct');
    table.dateTime('order_date').notNullable();
    table.string('status', 20).notNullable().defaultTo('ordered');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('order');
};
