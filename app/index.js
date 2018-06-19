'use strict';

const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const path = require('path');
const execSync = require('child_process').execSync;

global.ROOT_PATH = path.join(__dirname, '../');
global.ROOT_WORKSPACE_PATH = path.join(__dirname, '../../../');

var GraphouzzGenerator = yeoman.generators.Base.extend({
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);
    },

    end: function() {
        var message = chalk.yellow('All done here! \n');

        this.log(yosay(message));
    }
});

require('./lib/prompts.js')(GraphouzzGenerator);
require('./lib/processAnswers.js')(GraphouzzGenerator);
require('./lib/scaffolder.js')(GraphouzzGenerator);

module.exports = GraphouzzGenerator;
