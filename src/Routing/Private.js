import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { islogin } from './test';

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