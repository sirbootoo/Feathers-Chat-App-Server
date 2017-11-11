const assert = require('assert');
const app = require('../../src/app');

describe('\'work\' service', () => {
  it('registered the service', () => {
    const service = app.service('work');

    assert.ok(service, 'Registered the service');
  });
});
