const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: ['./src/index'],
        index_gpu: ['./src/index_gpu']
    },
    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'umd',
        library: 'humanseg'
    },
    node: {
        fs: 'empty'
    }
};
