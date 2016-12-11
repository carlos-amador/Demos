var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    //context: path.join(__dirname, 'app'),

    entry: {

        'vendor': './app/vendor',
        'app': './app/app'

    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'http://localhost:8100/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },


    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
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
                exclude: /index\.html/,
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
                test: /\.WOFF$/,
                loader: "url-loader?limit=10000&minetype=application/font-WOFF"
            },
            {
                test: /\.WOFF2$/,
                loader: "url-loader?limit=10000&minetype=application/font-WOFF2"
            },

            {
                test: /\.(ttf|TTF)$/,
                loader: "file-loader"
            },
            {
                test: /\.(eot|EOT)$/,
                loader: "file-loader"
            },
            {
                test: /\.(svg|SVG)$/,
                loader: "file-loader"
            }
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]

};