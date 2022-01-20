import { resolve } from 'path';
import { startDevServer } from '@cypress/webpack-dev-server';
import { getWebpackConfig } from 'nuxt';

const pluginsFunction: Cypress.PluginConfig = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  on('dev-server:start', async (options) => {
    const webpackConfig = await getWebpackConfig();
    const appPath = resolve(__dirname, '../../../app');
    const configFile = resolve(appPath, 'tsconfig.json');

    webpackConfig.output.path = resolve(appPath, '.nuxt/dist/client');
    webpackConfig.entry.app = [resolve(appPath, '.nuxt/client.js')];
    webpackConfig.module.rules.push({
      test: /\.ts$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            configFile
          }
        }
      ]
    });
    webpackConfig.resolve.alias['@'] = resolve(appPath, 'src');
    webpackConfig.resolve.alias['~'] = resolve(appPath, 'src');
    webpackConfig.resolve.extensions.push('.ts');

    return startDevServer({ options, webpackConfig })
  });

  return config;
};

export default pluginsFunction;
