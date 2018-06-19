'use strict';
var yosay = require('yosay');
var promptsEnum = require('../config/PromptsConfig');

module.exports = function(GraphouzzGenerator) {
    GraphouzzGenerator.prototype.askFor = function askFor() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Generator used for Graphouzz'));

        var prompts = [
            promptsEnum.GENERATE_NODE,
        ];

        this.prompt(prompts, function (answers) {
            this.answers = answers;
            done();
        }.bind(this));
    };
};
