'use strict';

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var GraphNodeGenerator = yeoman.generators.Base.extend({
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);
        this.option('data', {
            type: Object,
            required: true,
            desc: 'Options passed down from the parent Generator'
        });
    },

    prompting: function() {
        var message = chalk.red('GraphNodeGenerator: Prompting \n');
        // console.log('================' + global.ROOT_WORKSPACE_PATH);
        this.log(yosay(message));

    },

    writing: function() {
        var message = chalk.red('GraphNodeGenerator: Writing \n');

        this.log(yosay(message));
    },

    end: function() {
        var message = chalk.yellow('All done here! \n');

        this.log(yosay(message));
    }
});

require('./lib/prompts.js')(GraphNodeGenerator);
require('./lib/processAnswers.js')(GraphNodeGenerator);
require('./lib/GraphNodeScaffolder.js')(GraphNodeGenerator);

module.exports = GraphNodeGenerator;
