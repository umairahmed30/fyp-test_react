import react from "react";
import PageShifter from "./AllContext";
const Part5 = ()=>{
 
return(
    <>
      <div id="part-5" className="p-5" style={{display:"none"}} >
          <p>Tell us what a job should offer to make you happy</p>
          <h4>How much do you want to earn?</h4>
          <br/>
          <div id="slider_count">Salary = <span id="sliderStatus1"></span></div>
            <br/>
          <input type="range" class="form-range" min="10000" max="100000" step="10000" id="customRange1"/>
          <button id="btn-5b" type="button" class="btn btn-primary rounded-pill"  >Back</button>
          <button id="btn-5" type="button" class="btn btn-primary  rounded-pill">Select Salary</button>
        </div>
    </>
);
};
export {Part5}