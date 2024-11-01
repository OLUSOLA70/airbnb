const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point for the app
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './' // This makes all paths relative to index.html
  
  
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Handle JS and JSX files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,  // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,  // Handle image files (PNG, JPG, GIF, SVG)
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',  // Output filename format
              outputPath: 'images',  // Output directory for images
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve JS and JSX files without specifying extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Template file for the HTML
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),  // Static files to serve
    port: 3008,  // Development server port
    historyApiFallback: true,  // Fallback to index.html for Single Page Applications (SPA)
  },
};
