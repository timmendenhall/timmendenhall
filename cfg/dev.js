'use strict';

let path = require('path');
let webpack = require('webpack');
let _ = require('lodash');

let baseConfig = require('./base');

let config = _.merge({
    entry: [
        'webpack-hot-middleware/client',
        'bootstrap-loader',
        './src/index'
    ],
    cache: true,
    devtool: 'source-maps',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}, baseConfig);

// Add needed loaders
config.module.loaders.push({
    loader: 'babel',
    test: /\.(js|jsx)$/,
    include: [].concat(
        config.additionalPaths,
        [path.join(__dirname, '/../src')]
    )
});

module.exports = config;