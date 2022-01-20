module.exports = {
  hooks: {
    readPackage: (pkg) => {
      if (pkg.name === 'a11y') {
      }
      if (pkg.name === 'app') {
        pkg.dependencies['abort-controller'] = '^3.0.0';
        pkg.dependencies['consola'] = '^2.15.3';
        pkg.dependencies['css-loader'] = '^4.3.0';
        pkg.dependencies['defu'] = '^3.2.2';
        pkg.dependencies['destr'] = '^1.0.1';
        pkg.dependencies['ky'] = '^0.25.1';
        pkg.dependencies['node-fetch'] = '^2.6.1';
        pkg.dependencies['ufo'] = '^0.7.4';
        pkg.dependencies['unfetch'] = '^4.2.0';
        pkg.dependencies['vue'] = '^2.6.12';
        pkg.dependencies['vue-client-only'] = '^2.0.0';
        pkg.dependencies['vue-meta'] = '^2.4.0';
        pkg.dependencies['vue-no-ssr'] = '^1.1.1';
        pkg.dependencies['vue-router'] = '^3.5.1';
        pkg.dependencies['vue-template-compiler'] = '^2.6.12';
        pkg.dependencies['vuex'] = '^3.6.2';
        pkg.dependencies['web-streams-polyfill'] = '^3.0.1';
        pkg.dependencies['webpack'] = '^4.46.0';
      }
      if (pkg.name === 'e2e') {
      }
      if (pkg.name === 'integration') {
      }
      if (pkg.name === 'mock') {
      }
      if (pkg.name === 'perf') {
      }
      if (pkg.name === 'styleguide') {
        pkg.dependencies['@babel/core'] = '^7.16.7';
        pkg.dependencies['babel-loader'] = '^8.2.3';
        pkg.dependencies['css-loader'] = '^4.3.0';
        pkg.dependencies['react'] = '^17.0.2';
        pkg.dependencies['react-dom'] = '^17.0.2';
        pkg.dependencies['vue'] = '^2.6.12';
        pkg.dependencies['vue-loader'] = '^15.9.8';
        pkg.dependencies['vue-template-compiler'] = '^2.6.12';
        pkg.dependencies['webpack'] = '^4.46.0';
      }
      if (pkg.name === 'unit') {
      }
      return pkg;
    }
  }
}
