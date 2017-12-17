const path    = require('path');
const webpack = require("webpack");

module.exports = 
{
    resolve: 
    {
        modules: 
        [
            //path.resolve('./src')
            path.resolve('./src/js'),
            path.resolve('./src/css'),
            path.resolve('./src/img'),
            path.resolve('./src/html')
        ]
    },

    context: path.resolve(__dirname, './src/'),

    entry: './js/main.js',

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
    ],

    module: 
    {
        rules: 
        [
            {
                test: /\.(png|jpg|gif)$/,
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: {}  
                    }
                ]
            },

            {
                test: /\.(html)$/,
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: 
                        {
                            name: '[name].[ext]'
                        }  
                    }
                ]
            }
        ]
    }
};
