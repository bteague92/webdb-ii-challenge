
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('vin', 255)
            .unique()
            .notNullable()
        tbl.string('make', 255)
            .notNullable()
        tbl.string('model', 255)
            .notNullable()
        tbl.integer('milage')
            .notNullabale()
        tbl.string('transmission')
        tbl.string('titleStatus')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
