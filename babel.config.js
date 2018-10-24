
module.exports = {
  presets: [
    '@babel/preset-env',
  ],
  plugins: [[
    require.resolve('babel-plugin-import'),
    {
      libraryName: 'lodash',
      libraryDirectory: '',
      camel2DashComponentName: false,
    },
    'lodash',
  ],
  [
    require.resolve('babel-plugin-istanbul'),
    {
      useInlineSourceMaps: false,
    },
  ]],
};
