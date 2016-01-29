'use strict';

let path = require('path');
let webpack = require('webpack');
let _ = require('lodash');

let baseConfig = require('./base');

let config = _.merge({
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    cache: true,
    devtool: 'eval',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
}, baseConfig);

// Add needed loaders
config.module.loaders.push({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
        presets: ['es2015', 'react']
    }
});

module.exports = config;