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
                test: /\.s?css$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(ttf|eot|svg|jpg|png|woff)$/,
                loader: "url-loader"
            },
        ],

    }
};
