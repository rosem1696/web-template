import path from 'path';
import { Configuration } from 'webpack';
import 'webpack-dev-server'; // typescript complains if this isn't here
import { merge } from 'webpack-merge';
import { baseConfig, BuildMode } from './webpack.config.base';

const devProps: Configuration = {
  entry: './src/app/index.tsx',
  devtool: 'eval-source-map',
  devServer: {
    port: 9000,
    hot: true,
    open: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist/dev'),
    filename: 'web-template-frontend-dev.bundle.js',
    clean: true,
  },
};

const devConfig: Configuration = merge(baseConfig('development'), devProps);

export default devConfig;
