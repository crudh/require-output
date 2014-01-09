define(function (require) {
    'use strict';

    var _ = require('underscore');

    var output = {
        cleanPath: function (path, outputDir) {
            if (path.indexOf(outputDir) == 0) {
                var doFilter = true;
                return _.filter(path.split('/'), function (segment) {
                    if (doFilter && segment == outputDir) {
                        return false;
                    } else {
                        doFilter = false;
                        return true;
                    }
                }).join('/');
            } else {
                return path;
            }
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