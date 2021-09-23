import react from "react";
import { useState } from "react";

import { useSelector,useDispatch } from "react-redux";
const Part5 = ()=>{

  const dispatch=useDispatch();
  const stateMaintain=useSelector((state)=>state.stateMaintain);
const nextButton=useSelector((state)=>state.validateButton);

  const [tempSal,setTempSal]=useState(stateMaintain.salary);
  const [tog,setTog]=useState(nextButton.next5);

  const handleOnChangeBack=()=>{
    dispatch({type:'DECREMENT'});
    if(!tog){
    dispatch({type:'NEXTSAL'});
    }
  }
  const handleOnChangeNext=()=>{
    dispatch({type:'INCREMENT'});
    if(!tog){
    dispatch({type:'NEXTSAL'});
    };
  }   
 
return(
    <>
      <div id="part-5" className="p-5"  >
          <p>Tell us what a job should offer to make you happy</p>
          <h4>How much do you want to earn?</h4>
          <br/>
          <div id="slider_count">Salary ={tempSal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</div>
            <br/>
          <input onChange={(e)=>{dispatch({type:'SALARYSTATE',payload:e.target.value});setTempSal(e.target.value);setTog(false);}} value={tempSal} type="range" class="form-range" min="10000" max="100000" step="10000" id="customRange1"/>
          <button onClick={handleOnChangeBack} id="btn-5b" type="button" class="btn btn-primary rounded-pill"  >Back</button>
          <button onClick={handleOnChangeNext} id="btn-5" type="button" class="btn btn-primary ms-2  rounded-pill" disabled={tog}>Select Salary</button>
        </div>
    </>
);
};
export {Part5}