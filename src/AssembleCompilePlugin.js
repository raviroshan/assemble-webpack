const chalk = require('chalk');
const { handleAssemble } = require('./assemble-task');

function AssembleCompilePlugin(queries) {
  // Setup the plugin instance with queries...

  this.queries = queries;
}

AssembleCompilePlugin.prototype.apply = function myFn(compiler) {
  compiler.plugin('done', stats => {
    handleAssemble({
      webpackConfig: compiler,
      queries: this.queries
    });

    console.log(chalk.green.bold('Completed : Assemble.io Tasks 😎'));
  });
};

module.exports = AssembleCompilePlugin;
