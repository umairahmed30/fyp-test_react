import react from "react";
import { useSelector,useDispatch } from "react-redux";
import {Link,useHistory } from "react-router-dom";

const Part6 = ()=>{
  const dispatch=useDispatch();
  const history=useHistory();
  const stateMaintain=useSelector((state)=>state.stateMaintain);
  const handleOnChangeBack=()=>{
    dispatch({type:'DECREMENT'});
  }
  const handleOnChangeNext=()=>{
    dispatch({type:'INCREMENT'});
  }   
  const sendData= async(e)=>{
    e.preventDefault();
    const{radio1,
      radio2,
      university,
      transcript,
      skills,
      salary,
      name,
      email,
      password,}=stateMaintain;
    const res = await fetch("/register", { 
      method:"Post",
      headers:{
      "Content-type": "application/json"
      },
      body: JSON.stringify({
      radio1,
      radio2,
      university,
      transcript,
      skills,
      salary,
      name,
      email,
      password,
    })
    })
    history.push("/home");
  }
 
return(
    <>
    <div id="part-6" className="p-5"  >
      <div>
            <h6 className="text-center">Last Step:)</h6>
            <h4 className="text-center">You will be anonymous for companies</h4>
            <br/>
            <div className="mb-3" >
            <table class="table table-sm">
  <thead>
    <tr>
      
      <th scope="col">Position</th>
      <th scope="col">Job Type</th>
      <th scope="col">Skills</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{stateMaintain.radio1}</td>
      <td>{stateMaintain.radio2}</td>
      <td>skills</td>
      <td>{stateMaintain.salary}</td>
    </tr>

   
  </tbody>
</table>

            </div>
            </div>
            <br/>
            <div className="mb-3">
              <label for="exampleFormControlInput0" className="form-label">Name</label>
              <input onChange={(e)=>dispatch({type:'NAMESTATE',payload:e.target.value})}  type="text" className="form-control rounded-pill" name="name" id="exampleFormControlInput0" placeholder="Your Full Name"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input onChange={(e)=>dispatch({type:'EMAILSTATE',payload:e.target.value})} type="email" className="form-control rounded-pill" name="email" id="exampleFormControlInput1" placeholder="Type your email address"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">Password</label>
              <input onChange={(e)=>dispatch({type:'PASSSTATE',payload:e.target.value})} type="password" className="form-control rounded-pill" name="pass" id="exampleFormControlInput2"/>
            </div>
           
            <div className="mb-3">

              <button onClick={handleOnChangeBack} id="btn-6b" type="button" className="btn btn-primary mb-3 rounded-pill"  >Back</button>
              <button onClick={sendData} type="button" className="btn btn-primary mt-3  rounded-pill">Sign Up</button>
              
            </div>
            
          </div>
    </>
);
};
export {Part6}