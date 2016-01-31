/*eslint no-console:0 */
require('core-js/fn/object/assign');
var open = require('open');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var app = express();

// CONFIG
var port = process.env.PORT || 8080;
app.set('port', port);
var isProduction = process.env.NODE_ENV === 'production';

var rootDir = isProduction ? '/dist' : '/src';
var indexFile = isProduction ? '/index.prod.html' : '/index.dev.html';

// -- Add the Dev / Hot middleware if we're not in production mode
if (!isProduction) {
    var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var config = require('./webpack.config');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        hot: true,
        filename: 'app.js',
        publicPath: '/assets/',
        stats: {
            colors: true
        },
        historyApiFallback: true
    }));

    app.use(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
    }));
}

// -- Set our static files to serve from
app.use(express.static(path.join(__dirname, rootDir)));

app.get('*', function (req, res) {
    res.sendFile(__dirname + rootDir + indexFile);
});

app.listen(port, function () {
    var env = isProduction ? 'PROD' : 'DEV';
    console.log('timmendenhall.com [ ' + env  + ' ] Server listening on port: ', port);
    //open('http://localhost:' + port);
});