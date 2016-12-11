var path = require('path');

module.exports = {

    //context: path.join(__dirname, 'app'),

    entry: {
        'app': './app/app.module',
        'vendor': './app/vendor'

    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: 'dist'
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            { 
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },
            { 
                test: /jquery\.js$/, 
                loader: 'expose?$' 
            },
            { 
                test: /jquery\.js$/, 
                loader: 'expose?jQuery' 
            },
            { 
                test: /\.html$/, 
                loader: "ng-cache-loader" 
            },
            { 
                test: /\.css$/, 
                loader: "style!css" 
            },
            { 
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.eot$/, 
                loader: "url" 
            },
            { 
                test: /\.ttf$/, 
                loader: "file-loader" 
            },
            { 
                test: /\.eot$/, 
                loader: "file-loader"
            },
            { 
                test: /\.svg$/, 
                loader: "file-loader" 
            }
        ]
    }


};