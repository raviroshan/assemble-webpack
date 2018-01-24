# assemble-webpack

Webpack Loader + Plugin for compiling Handlebars using Assemble.io

# Install

    npm install --save-dev assemble-webpack

# Usage

    const assembleWebpack = require('assemble-webpack');

    module.exports = {
      module: {
        rules: [
          {
            test: /\.(hbs)$/,
            use: [
    			{
    				loader: 'assemble-webpack'
    			}
    		]
          }
        ]
      },
      plugins: [
        new assembleWebpack.AttachedPlugin({
    		baseLayout: './web/webroot/WEB-INF/layouts/base.hbs',
    		basePages: ['./web/webroot/WEB-INF/pages/**/*.hbs'],
    		partialsLayout: ['./web/webroot/WEB-INF/fe-components/**/*.hbs'],
    		partialsData: [
    			'./web/webroot/WEB-INF/fe-components/**/*.json',
    			'./web/webroot/WEB-INF/layouts/**/*.json',
    			'./web/webroot/WEB-INF/pages/**/*.json'
    		]
    	})
      ]
    }

You need Handlebars loader so that Webpack can keep an watch on any change in the required hbs files and **assemble-webpack** will generate the new compiled HTML files.

# Options

|      Name      | Type   | Description                                                                                                     |
| :------------: | ------ | --------------------------------------------------------------------------------------------------------------- |
|   baseLayout   | string | Relative path of Base Layout file considered as Main template. It comprise of HTML skeleton.                    |
|   basePages    | array  | Array of Relative path of Base Pages. These will generate the Actual HTML files as output.                      |
| partialsLayout | array  | Array of Relative path of HBS partials. These are small components and used inside another components or pages. |
|  partialsData  | array  | Array of Relative path of JSON data which will be interpolated in HBS components.                               |
