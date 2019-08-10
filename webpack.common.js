const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            }
        ]
    },
    plugins: [new CleanWebpackPlugin(), new CopyPlugin([{ from: './src/assets/', to: 'assets/' }])]
};
