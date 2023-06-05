const { generateMockData } = require('./src/utils')

const SOME_RANDOM_NUM_FOR_REPRODUCIBLE_TESTS = 17; // 0 - disable consistent values in a tests

module.exports = {
  PORT: 4000,
  RESOURCE_ITEMS_LIMIT: 50,
  WS_CHAT_ROUTE: '/chat',
  mockData: generateMockData(SOME_RANDOM_NUM_FOR_REPRODUCIBLE_TESTS),
}