define(function (require) {
    'use strict';

    var output = {
        cleanPath: function (path, outputDir) {
            while (path.indexOf(outputDir) == 0) {
                path = path.substring(outputDir.length + 1)
            }

            return path;
        },

        load: function (name, req, onload, config) {
            var outputDir = config.config.output.outputDir;
            var cleanPath = this.cleanPath(name, outputDir);

            req([outputDir + '/' + cleanPath], function (value) {
                onload(value);
            });
        }
    };

    return output;
});