const HtmlWebpackPlugin = require("html-webpack-plugin"),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      path = require("path");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
         {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
         },
         {
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
         }
      ]
   },
   plugins: [
       new HtmlWebpackPlugin({template: "./src/index.html", filename: "index.html"}), 
   ]
}
