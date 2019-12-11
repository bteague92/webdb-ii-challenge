
exports.up = function (knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        tbl.string('price', 255)
            .notNullable()
        tbl.string('vin', 255)
            .notNullable()
        tbl.string('make', 255)
            .notNullable()
        tbl.string('model', 100)
            .notNullable()
        tbl.string('soldTo', 255)
            .notNullable()
        tbl.string('soldToPhone', 100)
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('sales');
};
