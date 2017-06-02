var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    //插件项
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     mangle: {
        //         except: ['$super', '$', 'exports', 'require', 'module']
        //     }
        // }),
        //提公用js到common.js文件中
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new HtmlWebpackPlugin({
            filename: '../index.html',    //生成的html存放路径，相对于 path
            template: './html/index.html',    //html模板路径
            inject: true,    //允许插件修改哪些内容，包括head与body
            hash: true,    //为静态资源生成hash值
            chunks: ['common.js', 'index'],
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../list.html',    //生成的html存放路径，相对于 path
            template: './html/list.html',    //html模板路径
            inject: true,    //允许插件修改哪些内容，包括head与body
            hash: true,    //为静态资源生成hash值
            chunks: ['common.js', 'list'],
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../view.html',    //生成的html存放路径，相对于 path
            template: './html/view.html',    //html模板路径
            inject: true,    //允许插件修改哪些内容，包括head与body
            hash: true,    //为静态资源生成hash值
            chunks: ['common.js', 'view'],
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        })
    ],
    //页面入口文件配置
    entry: {
        index: './js/index.js',
        list: './js/list.js',
        view: './js/view.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
            loader: 'url-loader?limit=30000&name=../font/[name].[ext]'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!postcss-loader!less-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }, {
            test: /\.(jpg|png)$/,
            loader: "url?limit=8192&name=../img/[name].[ext]"
        }]
    },
    postcss: [autoprefixer({browsers: ['last 2 versions']})],
    //其它解决方案配置
    resolve: {
        root: './',
        extensions: ['', '.js', '.less', '.css'],
        alias: {
            swiper: 'bower_components/Swiper/dist/js/swiper.jquery.min.js',
            pagination: 'bower_components/twbs-pagination/jquery.twbsPagination.min.js'
        }
    }
};
