import React from 'react';
import { withRouter } from 'react-router-dom';

function User(props){
    return(
        <div>
            <h3>User component</h3>
            <h3>User id:{props.match.params.id}</h3>
            <h3>User Name:{props.match.params.name}</h3>
        </div>
    )
}

export default withRouter(User)