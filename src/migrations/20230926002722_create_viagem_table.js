exports.up = async (knex) => {
  return knex.schema.createTable('viagem', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.date('dataSaida').notNullable();
    table.date('dataChegada').notNullable();
    table.decimal('valor').notNullable();
  });
};

exports.down = async (knex) => {
  return knex.schema.dropTable('viagem');
};
