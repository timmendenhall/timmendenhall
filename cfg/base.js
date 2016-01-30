'use strict';
const autoprefixer = require('autoprefixer');
let path = require('path');
let srcPath = path.join(__dirname, '/../src');
let publicPath = '/assets/';
let additionalPaths = [];
module.exports = {
    additionalPaths: additionalPaths,
    debug: true,
    output: {
        path: path.join(__dirname, '/../dist/assets'),
        filename: 'app.js',
        publicPath: publicPath
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx'
        ],
        alias: {
            components: srcPath + '/components/',
            styles: srcPath + '/styles/',
            config: srcPath + '/config/' + process.env.REACT_WEBPACK_ENV
        }
    },
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            include: srcPath,
            loader: 'eslint-loader'
        }],
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss']
            },
            {
                test: /\.(scss)/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
                loader: 'url?limit=8000'
            },
            // Bootstrap 3
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            }
        ]
    },
    postcss: [autoprefixer]
};