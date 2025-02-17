// Function to chain preprocess functions
const chainPreprocess = (...preprocesses) => (code, options) => {
  return preprocesses.reduce((result, preprocess) => {
      return preprocess ? preprocess(result, options) : result;
  }, code);
};

// Function to merge plugin configurations
const mergePluginConfigs = (...plugins) => {
  const mergedConfig = {
      languages: [],
      parsers: {},
      printers: {},
      options: {},
      defaultOptions: {},
  };

  plugins.forEach(plugin => {
      if (plugin.languages) {
          mergedConfig.languages.push(...plugin.languages);
      }
      if (plugin.parsers) {
          Object.keys(plugin.parsers).forEach(parserName => {
              if (!mergedConfig.parsers[parserName]) {
                  mergedConfig.parsers[parserName] = { ...plugin.parsers[parserName] };
              }
              mergedConfig.parsers[parserName].preprocess = chainPreprocess(
                  mergedConfig.parsers[parserName].preprocess,
                  plugin.parsers[parserName].preprocess
              );
          });
      }
      if (plugin.printers) {
          Object.assign(mergedConfig.printers, plugin.printers);
      }
      if (plugin.options) {
          Object.assign(mergedConfig.options, plugin.options);
      }
      if (plugin.defaultOptions) {
          Object.assign(mergedConfig.defaultOptions, plugin.defaultOptions);
      }
  });

  return mergedConfig;
};

module.exports = mergePluginConfigs;

