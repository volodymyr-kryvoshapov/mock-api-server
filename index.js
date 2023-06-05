'use strict';

const jsonServer = require('json-server');
const { home, reset, upgradeChatWs } = require('./src/controllers');
const { isResourceReachedLimit } = require('./src/middlewares');
const { PORT, mockData } = require('./config.js');

const app = jsonServer.create();
const router = jsonServer.router(mockData);
const middlewares = jsonServer.defaults();
const port = parseInt(process.env.PORT) || PORT;

app.get('/', home)
app.get('/reset', reset)

app.use(middlewares);
app.use(isResourceReachedLimit)
app.use(router);

const server = app.listen(port, () => {
  console.log(`JSON Server is listening on http://localhost:${port}`)
});

server.on('upgrade', upgradeChatWs);

module.exports = app;