const app = require('./app');

app.listen();

export default {
  path: '/api',
  handler: app,
}
