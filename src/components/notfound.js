import React, { Component } from 'react';
// import withClass from './hoc/withClass';
import Aux from './hoc/Auxilliary';

class NotFound extends Component {
    render() {
        return (
            <Aux>
                <h1>-- Sorry Page Not Found :( --</h1>
                <h2>Enter the correct URL</h2>
            </Aux>                  
        )
    }
}

export default NotFound;
// export default withClass(NotFound, classes.NotFound);
