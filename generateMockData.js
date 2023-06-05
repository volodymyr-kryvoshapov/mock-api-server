'use strict';

const { faker } = require('@faker-js/faker');

module.exports.generateMockData = function () {
  const tablesCount = 15
  const waitersCount = 3
  const dishesCount = 45

  return {
    tables: multiple((id) => ({
      id,
      number: id
    }), tablesCount),
    waiters: multiple((id) => ({
      id,
      firstName: faker.person.firstName(),
      phone: faker.phone.number('###-##-##')
    }), waitersCount),
    dishes: multiple((id) => ({
      id,
      name: faker.lorem.sentence({ min: 1, max: 5 }),
      description: faker.lorem.paragraph({ min: 1, max: 3 }),
      price: faker.number.int({ min: 10, max: 100 })
    }), dishesCount),
    orders: multiple((id) => ({
      id,
      waiterId: faker.number.int({ min: 1, max: waitersCount }),
      tableId: faker.number.int({ min: 1, max: tablesCount }),
      dishes: multiple((i) => ({
        a: i,
        dishId: faker.number.int({ min: 1, max: dishesCount }),
        count: faker.number.int({ min: 1, max: 5 }),
      }), { min: 2, max: 5 }),
    }), 5),
  }
}

function multiple (fn, count) {
  const randomCount = typeof count === 'number' ? count : faker.number.int(count)
  const res = [];

  for (let index = 1; index <= randomCount; index++) {
    res.push(fn(index))
  }

  return res;
}