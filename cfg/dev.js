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
    ),
    query: {
        presets: ['react', 'es2015', 'react-hmre']
    }
});

module.exports = config;