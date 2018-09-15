# 🔩 🛠 assemble-webpack

Webpack Loader + Plugin for compiling Handlebars using Assemble.io

Generates HTML pages using Handlebars templating and Assemble's power.

# Install

`npm install --save-dev assemble-webpack`

# Usage

```js
const assembleWebpack = require('assemble-webpack');
const handlebarsHelpers = require('handlebars-helpers');

module.exports = {
  // webpack configurations
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
      baseLayout: ['./src/app/layouts/**/*.hbs'],
      basePages: ['./src/app/pages/**/*.hbs'],
      partialsLayout: ['./src/app/fe-components/**/*.hbs'],
      partialsData: [
        './src/app/fe-components/**/*.json',
        './src/app/layouts/**/*.json',
        './src/app/pages/**/*.json'
      ],
      helpers: [handlebarsHelpers(), './src/app/helpers/custom-helpers.js']
    })
  ]
};
```

# Configuration Options & Details

|      Name      | Type  | Description                                                                                                                |
| :------------: | ----- | -------------------------------------------------------------------------------------------------------------------------- |
|   baseLayout   | array | Relative path of Base Layout files considered as Main template. It acts as HTML skeleton and used by the actual basePages. |
|   basePages    | array | Relative path of Base Pages. These will generate the Actual HTML files as an output                                        |
| partialsLayout | array | Relative path of HBS partials. These are smaller re-usable components and can used inside another components or pages      |
|  partialsData  | array | Relative path of JSON data which will be interpolated in HBS components.                                                   |
|    helpers     | array | Relative path of custom helpers files                                                                                      |

# Important Points

- `assembleWebpack` is used as a plugin to provide the required configurations and to compile handlebar files using assembler.io during Webpack build.
- We also need `assemble-webpack` as a loader to compile Handlebars files with extension `hbs`

**Note**: Until you link the required resources in your project's dependency graph, Webpack will NOT be able to track it for any changes during `Watch` mode or while running `Webpack-dev-server`.

So even though `assembleWebpack` plugin generates the output during Webpack build, you still need to explicitly `import/require` the Handlebar resources somewhere in your project so that it can be re-compiled on the respective file changes.

# Demo/Example

You can refer https://github.com/raviroshan/assemble-webpack-demo
