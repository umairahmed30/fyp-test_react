import react from "react";
import { useState } from "react";
import {Part1} from "./Part1";
import { Part3 } from "./Part3";
import { Part4 } from "./Part4";
import { Part5 } from "./Part5";
import { Part6 } from "./Part6";
import { Home } from "../Home";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Route } from "react-router";
import { Switch } from "react-router";
import { stat } from "fs";
import logo_blue from "../../Logo/logo_blue.png";

const Form= ()=>{
    const [pageno,setpageno]=useState(1);
    const value={pageno,setpageno};
    const pageNo=useSelector((state)=>state.pageChange);
    

    return (
        <>
          
          <div class="container" >
              <div className="row">
                  <div className="col-3">
          <img src={logo_blue} alt="hello" className="mt-1 w-75" style={{display:"inline-block"}} />
          </div>
          <div className="col-9">

          <div class="position-relative" >
                  <form id="m-form"  class="form position-absolute mt-5 w-75"  method="post" encType="multipart/form-data">
                    {pageNo==1&&<Part1></Part1>}
                    {pageNo==2&&<Part3></Part3>}
                    {pageNo==3&&<Part4></Part4>}
                    {pageNo==4&&<Part5></Part5>}
                    {pageNo==5&&<Part6></Part6>}
                    </form>
                </div>
          </div>
          </div>
             
        </div>
                    

        </>
    );
};

export {Form}