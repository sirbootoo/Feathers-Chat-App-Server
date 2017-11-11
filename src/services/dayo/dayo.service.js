// Initializes the `dayo` service on path `/dayo`
const createService = require('feathers-nedb');
const createModel = require('../../models/dayo.model');
const hooks = require('./dayo.hooks');
const filters = require('./dayo.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'dayo',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dayo', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('dayo');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
