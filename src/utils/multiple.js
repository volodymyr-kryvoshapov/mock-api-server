'use strict';

const { faker } = require('@faker-js/faker');

module.exports.multiple = function (fn, count) {
  const randomCount = typeof count === 'number' ? count : faker.number.int(count)
  const res = [];

  for (let index = 1; index <= randomCount; index++) {
    res.push(fn(index))
  }

  return res;
}
