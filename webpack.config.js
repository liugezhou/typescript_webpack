const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode:'production',
  entry:"./src/index.tsx",
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer:{
    contentBase:'./dist',
    open:true,
    port:'3000',
    hot:true
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}