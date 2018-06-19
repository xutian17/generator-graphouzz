'use strict';
var yosay = require('yosay');
var promptsEnum = require('../config/PromptsConfig');

module.exports = function(GraphNodeGenerator) {
    GraphNodeGenerator.prototype.askFor = function askFor() {
        var done = this.async();
        var prompts = [];
        if (this.options.data &&
            this.options.data.generateNode) {
            prompts.push(promptsEnum.NODE_NAME);
        }

        this.prompt(prompts, function (answers) {
            this.answers = answers;
            done();
        }.bind(this));
    };
};
