module.exports = {
    entry: './src/index.js',
    output: {
        path: './bin',
        filename: 'homepage.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
        ],

    }
};
