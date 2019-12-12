
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: '3b3h3y4y882bd87d1b29',
          make: 'BMW',
          model: 'X3',
          milage: '123456',
          transmission: 'automatic',
          titleStatus: 'clean'
        },
        {
          vin: '384jb4i9f82bd87d1b29',
          make: 'Dodge',
          model: 'Stratus',
          milage: '123456',
          transmission: 'manual',
          titleStatus: 'clean'
        },
        {
          vin: '3b3h3ien9hd673jbd1b29',
          make: 'Ford',
          model: 'F150',
          milage: '123456',
          transmission: 'manual',
          titleStatus: 'clean'
        },
      ]);
    });
};
