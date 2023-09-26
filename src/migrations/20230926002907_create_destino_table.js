exports.up = async (knex) => {
  return knex.schema.createTable('destino', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.integer('id_viagem').unsigned().notNullable();
    table
      .foreign('id_viagem')
      .references('id')
      .inTable('viagem')
      .onDelete('CASCADE');
  });
};

exports.down = async (knex) => {
  return knex.schema.dropTable('destino');
};
