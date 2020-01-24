
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('id');
      tbl.string('project_name', 128).notNullable();
      tbl.string('description');
      tbl.boolean('completed');
    })
    .createTable('resources', tbl => {
      tbl.increments('id');
      tbl.string('resources_name', 128).notNullable();
      tbl.string('description');
    })
    .createTable('project_resources', tbl => {
      tbl.increments('id');
      tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
      tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources');
    })
    .createTable('tasks', tbl => {
      tbl.increments('id');
      tbl.string('description', 128).notNullable();
      tbl.string('notes');
      tbl.boolean('completed');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
