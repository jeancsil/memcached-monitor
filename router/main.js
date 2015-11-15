var memcachedService = require('../services/memcached');

module.exports = function (app) {
    'use strict';
    app.get('/', function (req, res) {
        res.render('index.html');
    });

    app.get('/memcached/users', function (req, res) {
        memcachedService.getStats(function (result) {
            res.json(result);
        });
    });
};