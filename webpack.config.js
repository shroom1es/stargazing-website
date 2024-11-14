const path = require('path');

module.exports = {
  entry: './path/to/your/javascript/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use @babel/preset-react if using React
          },
        },
      },
    ],
  },
  mode: 'development', // Change to 'production' for production builds
};
