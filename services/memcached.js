Memcached = require('memcached')
var memcached = new Memcached(config.memcachedConnectionString);

var getStats = function(callback) {
    memcached.stats(function(error, response){
        callback(response);
    });
}

module.exports = {
    getStats: getStats
};