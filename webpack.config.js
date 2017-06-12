/**
 * Created by suyu on 2017/6/12.
 */
var webpack = require("webpack");
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//ExtractTextPlugin������CSS��JS�ļ�
var $ = require("jquery");

module.exports = {
    entry: __dirname + "/src/js/release/index.js",
    output: {
        path: __dirname + '/build',
        filename: "finally.js"
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true //cssѹ��
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true //cssѹ��
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                minimize: true //cssѹ��
                            }
                        }
                    ]
                })
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader',
                options : {
                    postcss : [require('autoprefixer')({browsers : ['last 3 versions']})]
                }
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'url-loader',
                query: {
                    /*
                     *  limit=10000 �� 10kb
                     *  ͼƬ��СС��10kb ������������ʽ���������ͼƬ
                     * */
                    limit: 10000,
                    name: 'images/[name]-[hash:8].[ext]'
                }

            },
            {
                test: /\.html$/,
                loader: "html-loader?attrs=images:src images:data-src",
                query: {
                    minimize: true
                }
            },
            {
                //�ļ��������������ļ���̬��Դ
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./fonts/[name]-[hash:8].[ext]'
            }

        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss: function () {
                    return [precss, autoprefixer];
                },
                devServer: {
                    contentBase: "./build", //���ط����������ص�ҳ�����ڵ�Ŀ¼
                    colors: true, //�ն���������Ϊ��ɫ
                    historyApiFallback: true, //����ת
                    inline: true //ʵʱˢ��
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("flow.css")
    ]
};
