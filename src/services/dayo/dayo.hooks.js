const checkMessages = require('../../hooks/check-messages');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [checkMessages()],
    update: [checkMessages()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
