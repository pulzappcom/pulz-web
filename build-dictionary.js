const StyleDictionaryPackage = require('style-dictionary');

const StyleDictionary = StyleDictionaryPackage.extend({
  source: [
    './style-dictionary.json',
  ],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: './src/constants/theme/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

StyleDictionary.buildPlatform('js');
