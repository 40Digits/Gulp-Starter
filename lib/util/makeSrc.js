var ncp = require('ncp').ncp;

module.exports = function(config, plugins) {
  // Start creating _src
  plugins.util.log("Creating '" + plugins.util.colors.magenta('_src') + "' directory...");
  // copy the _src folder
  ncp(config.init.srcDir, config.source.root, function(err) {
    if (err) {
      return console.log(err);
    }
    plugins.util.log("Created '" + plugins.util.colors.green('_src') + "'");
  });
}