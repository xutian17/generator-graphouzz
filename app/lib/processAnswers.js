'use strict';
var GithubUtils = require('../../utilities/GithubUtils.js');
var _ = require('lodash');

module.exports = function(GraphouzzGenerator) {
    GraphouzzGenerator.prototype.processAnswers = function processAnswers() {
        this.generateNode = this.answers.generateNode;
        this.gitInfo = GithubUtils.getUserInfo();

        this.templateData = {
            generateNode: this.generateNode,
            userName: this.gitInfo.name,
            userEmail: this.gitInfo.email
        };
    };
};
