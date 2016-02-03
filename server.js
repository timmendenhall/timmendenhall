/*eslint no-console:0 */
import 'core-js/fn/object/assign';
import open from 'open';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import routes from './routes/index';

let app = express();

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

app.use(routes);

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

/**
 * Mongoose!
 */
mongoose.connect('mongodb://localhost/timmendenhall');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoDB connection error!'));
db.once('open', () => console.log('connected to MongoDB!'));
