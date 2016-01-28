/*eslint no-console:0 */
require('core-js/fn/object/assign');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var open = require('open');

// CONFIG
var isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
    new WebpackDevServer(webpack(config), config.devServer)
        .listen(config.port, 'localhost', function (err) {
            if (err) {
                console.log(err);
            }
            console.log('Listening at localhost:' + config.port);
            console.log('Opening your system browser...');
            open('http://localhost:' + config.port + '/webpack-dev-server/');
        });
} else {
    var express = require('express');
    var app = express();
    var path = require('path');

    var port = process.env.PORT || 8080;

    // -- Set our static files to serve from to our /dist/ directory
    app.use(express.static(path.join(__dirname, '/dist')));

    app.get('*', function(req, res){
        res.sendfile(__dirname + '/dist/index.html');
    });

    app.listen(port, function () {
        console.log('Example app listening on port ', port);
    });
}
