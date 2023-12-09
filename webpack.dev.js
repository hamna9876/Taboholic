const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'development',
    devtool: "inline-source-map"
});
//maybe add the correct set up for loader as seen in webpack.config.js
