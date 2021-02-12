exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
          {dateOfSale: '2019-09-10', seller: 'Latoya Higgins', buyer: 'Laurie Duncan', amount: 34218, car_id: 3},
          {dateOfSale: '2019-09-09', seller: 'Bethany Wilson', buyer: 'Eddie Casey', amount: 23871, car_id: 2},
          {dateOfSale: '2019-09-08', seller: 'Tyler Clarke', buyer: 'Henrietta Garza', amount: 11873, car_id: 1},
      ]);
    });
};