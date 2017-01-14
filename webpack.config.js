module.exports = {
    entry: __dirname + '/frontend/index.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/js'
    },
    resolve: {
        root: __dirname + '/frontend',
        alias: {},
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: __dirname + '/frontend',
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    }
};
