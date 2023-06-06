'use strict';

const { faker } = require('@faker-js/faker');
const { multiple } = require('./multiple.js');

module.exports.generateMockData = function (seedNum) {
  const tablesCount = 15
  const waitersCount = 3
  const dishesCount = 45

  if (seedNum) {
    faker.seed(seedNum)
  }

  return {
    todos: multiple((id) => ({
      id,
      title: faker.lorem.sentence({ min: 1, max: 5 }),
      done: faker.datatype.boolean()
    }), 10),
    contacts: multiple((id) => {
      const firstName = faker.person.firstName()
      const lastName = faker.person.lastName()

      return {
        id,
        firstName,
        lastName,
        phone: faker.phone.number('###-##-##'),
        email: faker.internet.email({ firstName, lastName }),
      }
    }, 10),
    stickers: multiple((id) => ({
      id,
      description: faker.lorem.sentence({ min: 1, max: 5 }),
      top: faker.number.int({ min: 1, max: 500 }),
      left: faker.number.int({ min: 1, max: 500 }),
      height: faker.number.int({ min: 100, max: 200 }),
      width: faker.number.int({ min: 200, max: 300 }),
    }), 10),
    students: multiple((id) => ({
      id,
      firstName: faker.person.firstName(),
      marks: faker.helpers.uniqueArray(() => faker.number.int({ min: 1, max: 10 }), 10),
    }), 10),
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
        id: i,
        dishId: faker.number.int({ min: 1, max: dishesCount }),
        count: faker.number.int({ min: 1, max: 5 }),
      }), { min: 2, max: 5 }),
    }), 5),
  }
}
