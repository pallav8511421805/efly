import React from 'react';
import { Route } from 'react-router-dom';

function Private({ component:Component,...rest}) {
    return (
        <Route {...rest} render={props=>(
            islogin() ? 
            <Component {...props}/>
            : <Redirect to={"/Login"}/> 
          )}/>
    );
}

export default Private;