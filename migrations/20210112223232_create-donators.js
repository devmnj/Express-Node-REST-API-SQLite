
exports.up = function(knex) {
return knex.schema.createTable('donators',tbl=>{
    tbl.increments(),
    tbl.text('name',128).notNullable(),
    tbl.text('location',128),
    tbl.text('phone',11).notNullable(),
    tbl.text('email',128),
    tbl.date('dob'),
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('donators')
};
