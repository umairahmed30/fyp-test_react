import react from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Cookies from 'js-cookie';

const Logout= ()=>{
    Cookies.remove('jwtoken');
  




     
    return (
        <>
           <Redirect to="/signin" />
        </>
    )
}

export {Logout}