const assembleLoader = require('./src/assemble-hbs-loader');

const AssembleCompilePlugin = require('./src/AssembleCompilePlugin');

assembleLoader.AttachedPlugin = AssembleCompilePlugin;
module.exports = assembleLoader;
