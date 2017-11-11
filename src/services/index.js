const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
const work = require('./work/work.service.js');
const dayo = require('./dayo/dayo.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(messages);
  app.configure(users);
  app.configure(work);
  app.configure(dayo);
};
