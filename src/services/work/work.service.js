// Initializes the `work` service on path `/work`
const createService = require('feathers-nedb');
const createModel = require('../../models/work.model');
const hooks = require('./work.hooks');
const filters = require('./work.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'work',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/work', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('work');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
  
};
