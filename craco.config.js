const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#2c64f0',
              '@font-size-base': '14px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
