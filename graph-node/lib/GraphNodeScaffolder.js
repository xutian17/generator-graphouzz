'use strict';

const mkdirp = require('mkdirp');
const constants = require('../utils/constants');
const path = constants.GRAPH_NODE_DIRECTORY;

console.log('>>>> working on path:', path);

module.exports = function(GraphNodeGenerator) {
    GraphNodeGenerator.prototype.generateNodeScaffold = function generateNodeScaffold() {
        console.log("==> GraphNode scaffolder", this.templateData, this.data);
        
        if (this.templateData.generateNode) {
            this.templateData.nodeDirectory = path + '/' + this.templateData.nodeName;

            mkdirp.sync(this.templateData.nodeDirectory);

            if (this.templateData.generateNode) {
                this.fs.copyTpl(
                    this.templatePath('GraphNodeTemplate.js'),
                    this.destinationPath(this.templateData.nodeDirectory, this.templateData.nodeNameInPascalCase + '.js'),
                    this.templateData
                );

                this.fs.copyTpl(
                    this.templatePath('SchemaTemplate.gql'),
                    this.destinationPath(this.templateData.nodeDirectory, this.templateData.nodeNameInPascalCase + '.gql'),
                    this.templateData
                );

                this.fs.copyTpl(
                    this.templatePath('TestTemplate.js'),
                    this.destinationPath(this.templateData.nodeDirectory + '/test', this.templateData.nodeNameInPascalCase + 'Test.js'),
                    this.templateData
                );
            }
        }
    }
};
