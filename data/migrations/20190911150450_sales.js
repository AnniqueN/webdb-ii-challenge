exports.up = function(knex) {
        return knex.schema
        .createTable('sales', tbl => {
                tbl.increments();
                tbl.string('dateOfSale').notNullable();
                tbl.string('seller').notNullable();
                tbl.string('buyer').notNullable();
                tbl.integer('amount').notNullable();
                tbl.integer('car_id').unsigned().notNullable().references('id').inTable('cars')
            })
          };
          exports.down = function(knex) {
                  return knex.schema
               
                    .dropTableIfExists('sales');
              };
                    