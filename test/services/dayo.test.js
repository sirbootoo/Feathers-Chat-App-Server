const assert = require('assert');
const app = require('../../src/app');

describe('\'dayo\' service', () => {
  it('registered the service', () => {
    const service = app.service('dayo');

    assert.ok(service, 'Registered the service');
  });
});
