/**
 * @owner: <%=userEmail%>
 *
 **/

var test = require('graphouzz/test-harness');

describe('Test - <%=nodeNameInPascalCase%>', function() {

    describe('Test - ??', function() {
        it('should return desired response', function() {
            return test.queryExpect(
                {
                    query:`
                        {
                            get<%=nodeNameInPascalCase%> {
                                id
                            }
                        }
                    `,
                    variables: null,
                    operationName: null
                },
                {
                    data: {
                        get<%=nodeNameInPascalCase%> : {
                            id: 1
                        }
                    }
                }
            );
        });
    });
});
