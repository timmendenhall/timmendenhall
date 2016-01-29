/*eslint no-console:0 */
require('core-js/fn/object/assign');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var open = require('open');
var express = require('express');
var path = require('path');

var app = express();

// CONFIG
var port = process.env.PORT || 8080;
app.set('port', port);
var isProduction = process.env.NODE_ENV === 'production';

// -- Add the Dev / Hot middleware if we're not in production mode
if (!isProduction) {
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

// -- Set our static files to serve from to our /dist/ directory
var rootDir = isProduction ? '/dist' : '/src';
app.use(express.static(path.join(__dirname, rootDir)));

app.get('*', function (req, res) {
    res.sendFile(__dirname + rootDir + '/index.html');
});

app.listen(port, function () {
    console.log('timmendenhall.com Server listening on port ', port);
    open('http://localhost:' + port);
});