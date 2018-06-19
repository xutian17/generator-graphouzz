/**
 * @owner: <%=userEmail%>
 *
 **/

import GraphNode from 'graphouzz/GraphNode';
import { batch, connect, service, plural } from 'graphouzz/helpers/Annotations';
import schema from './<%=nodeNameInPascalCase%>.gql';

class <%=nodeNameInPascalCase%> extends GraphNode {

    constructor() {
        super();
    }

    getSchema() {
        return schema;
    }

    getResolver(self) {
        return {
            Query: {
                get<%=nodeNameInPascalCase%>(obj, args, context, info, service) {
                    return {
                        id: 1
                    };
                }
            }
        };
    }
}

module.exports = new <%=nodeNameInPascalCase%>();
