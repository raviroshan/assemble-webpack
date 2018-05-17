const chalk = require('chalk');
const assemble = require('assemble');
const extname = require('gulp-extname');

let app;

function handleAssemble(params) {
    console.log(chalk.black.bold('Asseble.io - Starts'));

    // 1. Base Layout
    const {
        baseLayout
    } = params.queries;
    console.log('baseLayout: ', baseLayout);

    // 2. Partials - look for partials from different locations
    const {
        partialsLayout
    } = params.queries;
    console.log('partialsLayout: ', partialsLayout);

    // 3. Data that will be bound to Partials during compile time
    // const partialsData = getAbsolutePathArray(params.queries.partialsData);
    const {
        partialsData
    } = params.queries;
    console.log('partialsData: ', partialsData);

    // 4. Pages
    const {
        basePages
    } = params.queries;
    console.log('basePages: ', basePages);

    // 5. Output Folder
    const outputPath = params.webpackConfig.options.output.path;

    app = assemble();

    app.layouts(baseLayout);
    app.partials(partialsLayout);
    app.pages(basePages);
    app.data(partialsData);

    // 6. Final : Compilation and generating output
    app
        .toStream('pages')
        .pipe(extname())
        .pipe(app.renderFile())
        .pipe(app.dest(outputPath));

    console.log(chalk.black.bold('Asseble.io - Ends'));
}

module.exports = {
    handleAssemble
};
