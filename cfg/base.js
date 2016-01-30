'use strict';
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
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.sass/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.styl/,
                loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    postcss: function () {
        return [];
    }
};