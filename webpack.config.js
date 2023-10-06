const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.png'
        })
    ],
    module: {
        rules: [
            {
                test: /.(tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript' ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /favicon\.(png|ico)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
}
