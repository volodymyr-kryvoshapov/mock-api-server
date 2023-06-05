# Mock API Server

In memory REST server for mock,  prototyping and education purposes.

Build on top of [JSON Server](https://github.com/typicode/json-server) and [Faker](https://github.com/faker-js/faker).

The main reason of this project is:
- Add ability to auto generate data with Faker for provided resources.
- Create custom resources
- Limit number of resource items
- Reset data to defaults if this server users post some broken resources data.
- Contain simple websocket 'chat' application.

Default resources:

- `/todos`
- `/contacts`
- `/stickers`
- `/students`
- `/tables`
- `/waiters`
- `/dishes`
- `/orders`
- `/reset` - reset resources to defaults
- `/chat` - websocket chat app

# Example

[My own instance of Mock API Server in Google Cloud](https://mock-api-5678.nw.r.appspot.com/)

# Install

`npm install`

# Run locally

`npm run start`

By default, it will run http://localhost:4000

# How to use

```
Read
GET    /todos
GET    /todos/1

Create
POST   /todos

Update
PUT    /todos/1
PATCH  /todos/1

Delete
DELETE /todos/1
```

For more details (filtering, sorting, paginate, slicing, full-text search) see [JSON Server Routes](https://github.com/typicode/json-server#routes)

In order to create custom resources or modify existing edit file:

`./src/utils/generateMockData.js`

Do not forget restart server.

In order to reset data push button `Reset to defaults` on main page or just call resource `/reset`


# Websocket 'Chat' app

Embedded this app [websocket-server-chat](https://github.com/volodymyr-kryvoshapov/websocket-server-chat)

Local URL

`const ws = new WebSocket('ws://localhost:4000/chat');`

Example app URL

`const ws = new WebSocket('ws://mock-api-5678.nw.r.appspot.com/chat');`

Simple client example:

```javascript
const ws = new WebSocket('ws://localhost:4000/chat');

ws.onopen = () => {
  console.log('Connection with server was established')
  ws.send('New client connected');
};

ws.onclose = () => {
  console.log('Connection with server was closed')
};

ws.onmessage = (event) => {
  console.log('received: %s', event.data);
};

ws.onerror = (error) => {
  console.log('Error', error);
};
```


# Config

See `./config.js`

- PORT (4000 default) - You can change default port in `./config.js` or providing `process.env.PORT` env variable
- RESOURCE_ITEMS_LIMIT (50 default) - The maximum amount of items in every resource, max 50 todos, max 50 contacts, etc.
- WS_CHAT_ROUTE ('/chat' default) - route for websocket chat app

# Deploy with Google Cloud SDK

[Download Cloud SDK](https://cloud.google.com/sdk/docs/install-sdk)


Initialize your SDK

`gcloud init`


Deploy to App Engine

`gcloud app deploy`

# Need todo

- Authentication
- Random Errors
