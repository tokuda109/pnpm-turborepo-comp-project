import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  srcDir: 'src/',
  dev: process.env.NODE_ENV !== 'production',
  generate: {
    dir: '../../dist'
  },
  buildModules: ['@nuxt/typescript-build'],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
    ]
  },
  modules: [
    '@nuxt/http'
  ]
};

export default config;
