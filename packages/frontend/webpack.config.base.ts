import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export enum BuildMode {
  Development = 'development',
  Production = 'production',
}

export function baseConfig(mode: 'development' | 'production'): Configuration {
  return {
    entry: './src/init.ts',
    mode: mode,
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
        {
          test: /\.(c|sa|sc)ss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                esModule: true,
                modules: {
                  namedExport: true,
                  exportLocalsConvention: 'camelCaseOnly',
                  localIdentName:
                    mode === 'development'
                      ? '[path][name]__[local]'
                      : '[hash:base64]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)/,
          type: 'asset',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Web-Template',
        favicon: './src/public/favicon.ico',
      }),
    ],
  };
}
