import react from "react";
import PageShifter from "./AllContext";
import { useDispatch } from "react-redux";

import { incNumber,decNumber } from "./actions";
const Part3 = ()=>{
  const { pageno, setpageno } = react.useContext(PageShifter);
  const dispatch=useDispatch();

return(
    <>
         <div id="part-3" className="p-5" >
                
                <h5>What are your top skills?</h5>
                <p>From 2 to 10</p>

                <div id="skillShowHide">

                <div className="me-2" id="selected">

                </div>


                <hr/>

                <div id="set">
                  
                  {/* <div className="" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" className="btn-check" id="btncheckaa" autocomplete="off">
                    <label className="btn btn-outline-primary" for="btncheckaa">Checkbox 1</label>
                  </div> */}

                  

                  <h6>Sugguested Skills</h6>
                  <button id="html" name="hehe" type="button"  autocomplete="off" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-primary mt-2 rounded-pill me-2">HTML <span id="htmld"></span></button>
                  <button type="button">hello</button>
                  
                </div>
                </div>
 {/* Modal  */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">How much experience do you have?</h5>
                        <button type="button" className="btn-close rounded-pill" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        
                        <div id="slider_count">Experience = <span id="sliderStatus"></span></div>
                          <br/>
                        <input type="range" className="form-range" min="0" max="10" step="1" id="customRange"/>
                      </div>
                      <div className="modal-footer">
        
                        <button id="add" type="button" className="btn btn-primary mb-3 rounded-pill" data-bs-dismiss="modal">Add Experience</button>
                      </div>
                    </div>
                  </div>
                </div>
        
                
        

             
            <br/> 
            <input id="search" className="form-control me-2 mb-3 rounded-pill " type="search" placeholder="Search" aria-label="Search"/>
            <ul id="myUL" >
              <button id="22" data-bs-toggle="modal" data-bs-target="#exampleModal"  className="btn btn-outline-primary mt-2 rounded-pill me-2">R<span id="22d"></span></button>
           
              <button id="test" type="checkbox"  autocomplete="off" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-primary mt-2 rounded-pill me-2">Software Architecture <span id="swarchd"></span></button>
                  
            </ul>
            {/* <div id="no-skill" style="display: none;">
              <p id="skill-name" style="color: crimson;">
              </p>
              <a href="">Add it as new skill?</a>
              <p>Please check did you enter the name correct</p>
            </div>    */}
            <br/>
            <button onClick={()=>{dispatch(decNumber())}}  id="btn-3b" type="button" className="btn btn-primary mb-3 rounded-pill" >Back</button>
            <button onClick={()=>{dispatch(incNumber())}}  id="btn-3" type="button" className="btn btn-primary mb-3 rounded-pill" disabled>Next</button>





        </div>

    </>
);
};

export {Part3}