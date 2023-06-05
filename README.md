# Mock API Server

In memory REST server for mock and prototyping

Resources:

- todos
- contacts
- stickers
- students
- tables
- waiters
- dishes
- orders

# Install

`npm install`

# Run locally

`npm run start`

By default, it will run http://localhost:4000

# Config

See `./config.js`

- PORT (4000 default) - You can change default port in `./config.js` or providing `process.env.PORT` env variable
- RESOURCE_ITEMS_LIMIT (50 default) - The maximum amount of items in every resource, max 50 todos, max 50 contacts, etc.

# Deploy with Google Cloud SDK

[Download Cloud SDK](https://cloud.google.com/sdk/docs/install-sdk)


Initialize your SDK

`gcloud init`


Deploy to App Engine

`gcloud app deploy`
