module.exports = function (app, memcachedService) {
    app.get('/memcached/stats', function (req, res) {
        memcachedService.getStats(function (result) {
            res.json(result);
        });
    });
};