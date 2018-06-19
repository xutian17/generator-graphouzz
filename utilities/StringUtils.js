'use strict';
var _ = require('lodash');

module.exports = {
    convertToLowerCase: function(str) {
        if (str) {
            return str.toLowerCase();
        }

        return str;
    },

    convertToCamelCase: function(str) {
        if (str) {
            return _.camelCase(str);
        }

        return str;
    },

    convertToPascalCase: function(str) {
        if (str) {
            return _.upperFirst(_.camelCase(str));
        }

        return str;
    },

    convertToUpperCase: function(str) {
        if (str) {
            return str.toUpperCase().replace('-', '_');
        }

        return str;
    }
};
