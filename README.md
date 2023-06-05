# Mock API Server

In memory REST server for mock and prototyping.

Build on top of <a href="https://github.com/typicode/json-server" target="_blank">JSON Server</a> and <a href="https://github.com/faker-js/faker" target="_blank">Faker</a>.

The main reason of this project is:
- Add ability to auto generate data with Faker for provided resources.
- Create custom resources
- Limit number of resource items
- Reset data to defaults if this server users post some broken resources data.

# Example

<a href="https://mock-api-5678.nw.r.appspot.com" target="_blank">My own instance of Mock API Server in Google Cloud</a>

# Install

`npm install`

# Run locally

`npm run start`

By default, it will run http://localhost:4000

# How to use

See <a href="https://github.com/typicode/json-server#routes" target="_blank">JSON Server Routes</a>

Default resources:

- `/todos`
- `/contacts`
- `/stickers`
- `/students`
- `/tables`
- `/waiters`
- `/dishes`
- `/orders`

In order to create custom resources or modify existing edit file:

`./src/utils/generateMockData.js`

Do not forget restart server.

In order to reset data push button `Reset to defaults` on main page or just call `/reset`



# Config

See `./config.js`

- PORT (4000 default) - You can change default port in `./config.js` or providing `process.env.PORT` env variable
- RESOURCE_ITEMS_LIMIT (50 default) - The maximum amount of items in every resource, max 50 todos, max 50 contacts, etc.

# Deploy with Google Cloud SDK

<a href="https://cloud.google.com/sdk/docs/install-sdk" target="_blank">Download Cloud SDK</a>


Initialize your SDK

`gcloud init`


Deploy to App Engine

`gcloud app deploy`
