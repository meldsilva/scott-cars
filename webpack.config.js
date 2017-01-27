var path = require('path');
var webpack = require('webpack');

// var BUILD_DIR = path.resolve(__dirname, './nui/public');
// var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};