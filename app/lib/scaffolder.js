'use strict';

module.exports = function(GraphouzzGenerator) {
    GraphouzzGenerator.prototype.generateAppScaffold = function generateAppScaffold() {
        if (this.generateNode) {
            this.composeWith('graphouzz:graph-node', {
                options: {
                    data: this.templateData
                }
            });
        }
    };
};
