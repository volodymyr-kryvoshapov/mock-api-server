const { mockData } = require('../../config.js');
const { generateMockData } = require('../utils');

module.exports.reset = (req, res) => {
  const newData = generateMockData()

  Object.keys(mockData).map(resource => mockData[resource] = newData[resource])

  res.status(200).send(`<p>Settings have been reset</p>`)
}
