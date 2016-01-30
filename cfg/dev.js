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
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: [].concat(
        config.additionalPaths,
        [path.join(__dirname, '/../src')]
    ),
    query: {
        plugins: []
    }
});

// Hot mode
if (process.env.HOT) {
    // Note: enabling React Transform and React Transform HMR:
    config.module.loaders[0].query.plugins.push('react-transform');
    config.module.loaders[0].query.extra = {
        'react-transform': [{
            target: 'react-transform-hmr',
            imports: ['react-native'],
            locals: ['module']
        }]
    };
}

module.exports = config;