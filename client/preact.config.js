export default function (config, env, helpers) {
  /** you can change config here **/
  /* helpers.getPluginsByName(config)*/
  helpers.getLoadersByName(config, 'babel-loader')[0].rule.options.babelrc = true
}
