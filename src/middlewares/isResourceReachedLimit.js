const { RESOURCE_ITEMS_LIMIT, mockData } = require('../../config.js');

module.exports.isResourceReachedLimit = (req, res, next) => {
  if (req.method === 'POST' && isResourceReachedLimit(req.url, req.headers.host)) {
    res.status(400).send(`<p>Resource reached the items limit (${RESOURCE_ITEMS_LIMIT})</p>`)
  } else {
    next()
  }
}

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
