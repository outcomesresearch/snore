const webpackParams = {
  title:
    'Symptoms of Nocturnal Obstruction and Related Events (SNORE) Questionnare',
  description:
    "Evaluate the extent of one's physical problems, limitations, and emotional consequences of sleep disorder-related health burdens with a 25-question inventory.",
  site_name:
    'Applets from Clinical Outcomes Research at Washington University in St Louis',
  url: 'https://outcomesresearch.github.io/snore/',
};

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/snore/' : '/',
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      Object.entries(webpackParams).forEach(([key, value]) => {
        args[0][key] = value;
      });
      return args;
    });
  },
};
