'use strict';

var _ = require('lodash');
var StringUtils = require('../../utilities/StringUtils.js');

module.exports = function(GraphNodeGenerator) {
    GraphNodeGenerator.prototype.processAnswers = function processAnswers() {
        this.generateNode = this.options.data.generateNode;
        this.nodeName = this.answers.nodeName;

        let data = {};

        if (this.nodeName) {
            data = {
                generateNode: this.generateNode,
                nodeName: this.nodeName,
                nodeNameInPascalCase: StringUtils.convertToPascalCase(this.nodeName),
                nodeNameInCamelCase: StringUtils.convertToCamelCase(this.nodeName),
                nodeNameInUpperCase: StringUtils.convertToUpperCase(this.nodeName)
            };
        }


        this.templateData = _.extend({}, this.options.data, data);
    };
};
