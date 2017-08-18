const webpack = require('webpack');
const path = require('path');

const libraryName = "mithrilmdl";
const outputFile = libraryName + ".js";

module.exports = {
    entry: ['./src/index.js'],
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            { test: /(\.jsx|\.js)$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=assets/[name].[ext]' },
        ]
    },
    externals: {
        'mithril': {
            root: 'm',
            commonjs2: 'mithril',
            commonjs: 'mithril',
            amd: 'mithril'
        }
    },
    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [".js"], //, ".jsx"
    }
}