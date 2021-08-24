import react from "react";
import PageShifter from "./AllContext";
const Part6 = ()=>{
 
return(
    <>
    <div id="part-6" className="p-5" style={{display:"none"}} >
            <h6 className="text-center">Last Step:)</h6>
            <h4 className="text-center">You will be anonymous for companies</h4>
            <br/>
            <br/>
            <div className="mb-3">
              <label for="exampleFormControlInput0" className="form-label">Name</label>
              <input type="text" className="form-control rounded-pill" name="name" id="exampleFormControlInput0" placeholder="Your Full Name"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control rounded-pill" name="email" id="exampleFormControlInput1" placeholder="Type your email address"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">Password</label>
              <input type="password" className="form-control rounded-pill" name="pass" id="exampleFormControlInput2"/>
            </div>
           
            <div className="mb-3">

              <button id="btn-6b" type="button" className="btn btn-primary mb-3 rounded-pill"  >Back</button>
              <button type="submit" className="btn btn-primary mt-3  rounded-pill">Sign Up</button>
            </div>
            
          </div>
    </>
);
};
export {Part6}