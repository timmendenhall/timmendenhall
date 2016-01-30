'use strict';

let path = require('path');
let webpack = require('webpack');
let _ = require('lodash');

let baseConfig = require('./base');

let config = _.merge({
    entry: path.join(__dirname, '../src/index'),
    cache: false,
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}, baseConfig);

config.module.loaders.push({
    loader: 'babel',
    test: /\.(js|jsx)$/,
    include: [].concat(
        config.additionalPaths,
        [path.join(__dirname, '/../src')]
    ),
    query: {
        presets: ['react', 'es2015']
    }
});

module.exports = config;
