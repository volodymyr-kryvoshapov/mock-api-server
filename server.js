'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const { generateMockData } = require('./generateMockData.js');
const mockData = generateMockData()
const router = jsonServer.router(mockData);
const middlewares = jsonServer.defaults();
const port = parseInt(process.env.PORT) || 4000;
const RESOURCE_ITEMS_LIMIT = 50

server.get('/', (req, res) => {
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
      <div><button onclick="fetch('/reset'); window.location.reload();">Reset to defaults</button></div>
    `)
})

server.get('/reset', (req, res) => {
  const newData = generateMockData()

  Object.keys(mockData).map(resource => mockData[resource] = newData[resource])

  res.status(200).send(`<p>Settings have been reset</p>`)
})

server.use(middlewares);

server.use((req, res, next) => {
  if (req.method === 'POST' && isResourceReachedLimit(req.url, req.headers.host)) {
    res.status(400).send(`<p>Resource reached the items limit (${RESOURCE_ITEMS_LIMIT})</p>`)
  } else {
    next()
  }
})

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is listening on http://localhost:${port}`)
});

function isResourceReachedLimit (url, host) {
  try {
    const { pathname } = new URL(url || '', `https://${host}`)
    const resourceName = pathname?.replace('/api', '')?.replace(/^\//, '')?.split('/')?.[0]
    const resource = mockData?.[resourceName]

    return resource?.length >= RESOURCE_ITEMS_LIMIT
  } catch (e) {
    console.error(e.message)
    return true;
  }
}

module.exports = server;