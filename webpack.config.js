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
                loaders: ['babel-loader']
            },
            {
                test: /\.s?css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|eot|svg|jpg|png|woff)$/,
                loader: "url-loader"
            },
        ],

    }
};
