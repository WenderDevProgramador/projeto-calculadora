const path = require('path');
const { default: test } = require("node:test");

module.exports = {
    entry: {
        index: './src/script/index.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'docs')
    }
}