import { Configuration } from 'webpack';
import path from 'path';

const config: Configuration = {
  mode: 'production',
  entry: './src/init.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            projectReferences: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'web-template-frontend.bundle.js',
    clean: true,
  },
};

export default config;
