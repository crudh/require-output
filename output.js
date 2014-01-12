define(function (require) {
    'use strict';

    var output = {
        load: function (name, req, onload, config) {
            var outputDir = config.config.output.outputDir;

            while (name.indexOf(outputDir) == 0) {
                name = name.substring(outputDir.length + 1);
            }

            req([outputDir + '/' + name], function (value) {
                onload(value);
            });
        }
    };

    return output;
});