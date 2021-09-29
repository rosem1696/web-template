import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { baseConfig } from './webpack.config.base';

const prodProps: Configuration = {
  entry: './src/app/index.tsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/prod'),
    filename: 'web-template-frontend.bundle.js',
    clean: true,
  },
};

const prodConfig: Configuration = merge(baseConfig('production'), prodProps);

export default prodConfig;
