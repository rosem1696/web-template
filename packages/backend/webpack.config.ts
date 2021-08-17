import { Configuration } from 'webpack';
import path from 'path';

const config: Configuration = {
  mode: 'production',
  entry: './src/init.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'web-template-backend.bundle.js',
    clean: true,
  },
};

export default config;
