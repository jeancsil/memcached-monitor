var memcachedService = require('../services/memcached');

module.exports = function (app) {
    require('./root')(app);
    require('./memcached')(app, memcachedService);  
};