module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            "@assets": './assets',
            "@api": './src/api',
            "@components": './src/components',
            "@context": './src/context',
            "@hooks": './src/hooks',
            "@languages": './src/languages',
            "@navigator": './src/navigator',
            "@screens": './src/screens',
            "@styles": './src/styles',
          }
        }
      ]
    ]
  };
};
