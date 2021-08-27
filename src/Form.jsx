import react from "react";
import { useState } from "react";
import {Part1} from "./Part1";
import { Part3 } from "./Part3";
import { Part4 } from "./Part4";
import { Part5 } from "./Part5";
import { Part6 } from "./Part6";
import PageShifter from "./AllContext";
import { useSelector } from "react-redux";
import { stat } from "fs";

const Form= ()=>{
    const [pageno,setpageno]=useState(1);
    const value={pageno,setpageno};
    const pageNo=useSelector((state)=>state.pageChange);
    




    return (
        <>
          <div class="container" >
              <div class="position-relative" >
                  <form id="m-form" class="form position-absolute mt-5 top-50 start-50 w-50" action="/" method="get">
                      
                  <PageShifter.Provider value={value} >
                    
                    {pageNo==1&&<Part1></Part1>}
                    {pageNo==2&&<Part3></Part3>}

                    
                    {pageNo==3&&<Part4></Part4>}
                    {pageNo==4&&<Part5></Part5>}
                    {pageNo==5&&<Part6></Part6>}

                      
                      
                    
                    </PageShifter.Provider> 

                    </form>
                </div>
        </div>             

        </>
    );
};

export {Form}