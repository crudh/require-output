require-output
==============
A simple RequireJS plugin that loads resources from a matching output directory structure.

This can be used together with, for example, a Grunt watcher plugin that compiles or transforms files on demand to a matching "compiled" directory structure. This way the entire output directory can be git ignored, original files and output files won't be mixed and you can use short relative paths to load your resources, the plugin will handle converting the path to the output directory.

## Installation
The simplest way to install it is to use bower:
```
$ bower install require-output --save-dev
```

## Examples
The examples below are for Facebook React JSX files that are located in src/app/ and are compiled into src/compiled/app.

### Example directory structure
```
src/
  main.js
  app/
    app.jsx
    form/
      form.jsx
  compiled/
    app/
      app.js
      form/
        form.js
```

### Example configuration
```
require.config({
  config: {
    output: {
      outputDir: 'compiled'
    }
  },
  paths: {
    output: 'components/require-output/output'
  }
});
```
The **outputDir** is required and points to the matching output directory structure.

### Example usage in main.js
```
require(['react', 'output!app/app' ], function(React, App) {
  React.renderComponent(
    App({}),
    document.getElementById('main')
  );
});
```
