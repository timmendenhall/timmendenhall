'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');
let webpack = require('webpack');
let _ = require('lodash');

let baseConfig = require('./base');

let config = _.merge({
    entry: [
        'bootstrap-loader/extractStyles',
        path.join(__dirname, '../src/index')
    ],
    cache: false,
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('app.css', { allChunks: true })
    ]
}, baseConfig);

config.module.loaders.push({
    loader: 'babel',
    test: /\.(js|jsx)$/,
    include: [].concat(
        config.additionalPaths,
        [path.join(__dirname, '/../src')]
    )
});

module.exports = config;
