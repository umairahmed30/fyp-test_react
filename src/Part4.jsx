import react from "react";
import PageShifter from "./AllContext";
const Part4 = ()=>{
 
return(
    <>
    <div id="part-4" className="p-5" style={{display:"none"}} >
          <div id="skilset">
            
          </div>
          <hr/>
          <div id="recommendations" > 
            <div className="mb-3 row g-3">
              <div className="col-auto">
              <label for="exampleFormControlInput4" className="form-label">Enter Email address for recommendations</label>
              <input type="email" className="form-control" id="exampleFormControlInput4" placeholder="name@example.com"/>
            </div>
            {/* <div className="col-auto">
              <span id="email-val-1" style="display: none;" ></span>
                is ki jga readonly use kia ha
            </div> */}
            <div className=" col-auto">
              <button id="email-btn-1" type="button" className="btn btn-primary mt-4 rounded-pill"  >Add</button>
              <button id="email-btn-1-edit" className="btn btn-outline-primary mt-4 rounded-pill">Edit</button>
            </div>
           
              <div id="emailbody1"></div>
              
            </div>
            

            <div className="mb-3 row g-3" id="email-2" style={{display: "none"}}>
            <div className="col-auto">
              <label for="exampleFormControlInput5" className="form-label">Enter another Email address for recommendations</label>
              <input type="email" className="form-control" id="exampleFormControlInput5" placeholder="name@example.com"/>
              </div>
              <div className=" col-auto">
                <button id="email-btn-2" type="button" className="btn btn-primary mt-4 rounded-pill"  >Add</button>
                <button id="email-btn-2-edit" className="btn btn-outline-primary mt-4 rounded-pill">Edit</button>
              </div>
              <div id="emailbody2"></div>
            </div>
            <div className="mb-3 row g-3" id="email-3" style={{display: "none"}}>
              <div className="col-auto">
              <label for="exampleFormControlInput6" className="form-label">Enter another Email address for recommendations</label>
              <input type="email" className="form-control" id="exampleFormControlInput6" placeholder="name@example.com"/>
              </div>
              <div className=" col-auto">
                <button id="email-btn-3" type="button" className="btn btn-primary mt-4 rounded-pill"  >Add</button>
                <button id="email-btn-3-edit" className="btn btn-outline-primary mt-4 rounded-pill">Edit</button>
              </div>
              <div id="emailbody3"></div>
            </div>
            <button id="add-email" className="btn btn-outline-primary rounded-pill">Add Email</button>
            </div>
            <button id="btn-4b" type="button" className="btn btn-primary mb-3 mt-3 rounded-pill"  >Back</button>
            <button id="btn-4" className="btn btn-outline-primary mb-3 mt-3 rounded-pill">Next</button>
          </div>
      </>
);
};

export {Part4}