const { mockData, RESOURCE_ITEMS_LIMIT } = require('../../config.js');

module.exports.home = (req, res) => {
  const resources = Object.keys(mockData)
  const links = resources.map(resource => `
    <div><a href="/${resource}" target="_blank">${resource} (${mockData[resource]?.length})</a></div>
  `).join('')

  res
    .set('Cache-Control', 'no-store')
    .status(200)
    .send(`
      <h1>Resources:</h1>
      ${links}
      <h2>Options:</h2>
      <div>Resource Items Limit: ${RESOURCE_ITEMS_LIMIT}</div>
      <div><button onclick="fetch('/reset').then(() => window.location.reload())">Reset to defaults</button></div>
    `)
}
