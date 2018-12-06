const path = require('path');
const TsconfigPaths = require('tsconfig-paths-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        bundle: './src/index.ts',
    },
    output: {
        path: path.resolve('./public/js'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'],
        plugins: [
            new TsconfigPaths({
                configFile: './tsconfig.json',
            }),
        ],
    },
    optimization: {
        minimize: false,
    },
    devtool: 'source-maps',
};
