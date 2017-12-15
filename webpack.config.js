const path    = require('path');
const webpack = require("webpack");

module.exports = 
{
    entry: './src/main.js',

    output: 
    {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: 
    [
        new webpack.optimize.UglifyJsPlugin
        ({
            minimize: true,
            mangle: true,
            compress: true,
            warnings: true
        }),
    ]
};
