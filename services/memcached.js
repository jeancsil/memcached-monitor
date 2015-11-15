Memcached = require('memcached')
var memcached = new Memcached('127.0.0.1:11211');

var getActiveUsers = function(callback) {
    memcached.stats(function(error, response){
        callback(response);
    });
}

module.exports = {
    getActiveUsers: getActiveUsers
};