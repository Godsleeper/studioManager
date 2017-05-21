var webpack = require("webpack");
var path = require("path");
var srcDir = path.resolve(process.cwd());
var nodeModPath = path.resolve(__dirname, '../node_modules');

module.exports = {
    entry: {
        login: './containers/login.jsx',
        tManage: './routes/tManage.jsx',
        sManage: './routes/sManage.jsx',
        exhibition: './routes/exhibition.jsx',
        vendor:[
            'react',
            'react-dom',
            'moment',
            'antd',
            'react-router-dom',
            'axios'
        ]
    },//入口js，可为数组

    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name]Pack.js"
    },

    module: {
        loaders: [
            {
                test: /\.(png|jpg|JPG)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.css|.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ],
    },

    resolve: {
        extensions: ['.js',"",".css",".scss"],//指明那些文件名是webpack要扫描到的
        root: [srcDir,nodeModPath],
        publicPath: '/'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]

}