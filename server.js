var express = require('express'),
    app = express();

require('./config');
require('./router/main')(app);

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(config.nodePort, function () {
    'use strict';
    console.log("Server listening in port " + config.nodePort);
});