
exports.up = function(knex) {
  return knex.schema.createTable('trails', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('difficulty').notNullable()
    table.string('summary').notNullable()
    table.integer('stars')
    table.string('url')
    table.string('location').notNullable()
    table.integer('mtbproject_id')
    table.string('img_med')
    table.integer('length')
    table.integer('ascent')
    table.integer('descent')
    table.integer('high')
    table.integer('low')
    table.integer('longitude')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('trails')
}
