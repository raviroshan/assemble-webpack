const chalk = require('chalk');
const assemble = require('assemble');
const extname = require('gulp-extname');
const plumber = require('gulp-plumber');

function handleAssemble(params) {
  console.log(chalk.black.bold('Asseble.io - Starts'));

  const {
    queries: { baseLayout, partialsLayout, basePages, partialsData, helpers },
    webpackConfig: {
      options: {
        output: { path: outputPath }
      }
    }
  } = params;

  // 1. Base Layout : Acts as skeleton for different pages
  console.log('baseLayout: ', baseLayout);

  // 2. Partials : partials/components from different locations
  console.log('partialsLayout: ', partialsLayout);

  // 3. Pages : The actual HTML pages created based on baseLayout and using partials/components
  console.log('basePages: ', basePages);

  // 4. Data that will be bound to Partials during compile time
  console.log('partialsData: ', partialsData);

  // 5. Helpers Functions
  console.log('Helpers: ', helpers);

  // 6. Output Folder for generating the HTML
  console.log('outputPath: ', outputPath);

  const app = assemble();

  app.layouts(baseLayout);
  app.partials(partialsLayout);
  app.pages(basePages);
  app.data(partialsData);
  app.helpers(helpers);

  // 6. Final : Compilation and generating output
  app
    .toStream('pages')
    .pipe(plumber())
    .pipe(extname())
    .pipe(app.renderFile())
    .pipe(app.dest(outputPath));

  console.log(chalk.black.bold('Asseble.io - Ends'));
}

module.exports = {
  handleAssemble
};
