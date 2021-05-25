const { initPlugin } = require('cypress-plugin-snapshots/plugin');
const browserify = require('@cypress/browserify-preprocessor');
/**
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on, config) => {
  on(
    'file:preprocessor',
    browserify({
      typescript: require.resolve('typescript'),
    })
  );
    initPlugin(on, config);
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    require('@cypress/code-coverage/task')(on, config)
    // include any other plugin code...
   
    // It's IMPORTANT to return the config object
    // with any changed environment variables
    return config
  }