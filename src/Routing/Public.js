import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { islogin } from './test';

function Public({ component:Component,restricted=false,...rest}) {
    return (
      <Route {...rest} render={props=>(
        islogin() && restricted === true? 
        <Redirect to={"/home"}/>
        : <Component {...props}/>
      )}/>
    );
}

export default Public;