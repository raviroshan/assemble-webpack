const chalk = require('chalk');
const assemble = require('assemble');
const extname = require('gulp-extname');

function handleAssemble(params) {
	console.log(chalk.black.bold('Asseble.io - Starts'));

	// 1. Base Layout
	const { baseLayout } = params.queries;
	console.log('baseLayout: ', baseLayout);
	assemble.layouts(baseLayout);

	// 2. Partials - look for partials from different locations
	const { partialsLayout } = params.queries;
	// console.log('partialsLayout: ', partialsLayout);
	assemble.partials(partialsLayout);

	// 3. Data that will be bound to Partials during compile time
	// const partialsData = getAbsolutePathArray(params.queries.partialsData);
	const { partialsData } = params.queries;
	console.log('partialsData: ', partialsData);
	assemble.data(partialsData);

	// 4. Pages
	const { basePages } = params.queries;
	console.log('basePages: ', basePages);

	// 5. Output Folder
	const outputPath = params.webpackConfig.options.output.path;

	// 6. Final : Compilation and generating output
	assemble
		.src(basePages)
		.pipe(extname())
		.pipe(assemble.dest(outputPath));

	console.log(chalk.black.bold('Asseble.io - Ends'));
}

module.exports = {
	handleAssemble
};
