
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {
          price: '2000',
          vin: '3b3h3y4y882bd87d1b29',
          make: 'BMW',
          model: 'X3',
          soldTo: '123456',
          soldToPhone: 'automatic'
        },
        {
          price: '2000',
          vin: 'hsfiwebsigfaedugf967',
          make: 'BMW',
          model: 'X6',
          soldTo: '123456',
          soldToPhone: 'automatic'
        }
      ]);
    });
};
