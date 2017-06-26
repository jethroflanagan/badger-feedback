module.exports = {
    entry: './src/index',
    output: {
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
            },
        }],
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    }
}
