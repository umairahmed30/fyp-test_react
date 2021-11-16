import react from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {Link,useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import validator from 'validator';

const Part6 = ()=>{
  const [nameError,setNameError]=useState("");
  const [emailError,setEmailError]=useState("");
  const [passError,setPassError]=useState("");
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
   
  const dispatch=useDispatch();
  const history=useHistory();
  const stateMaintain=useSelector((state)=>state.stateMaintain);
  const transcMaintain=useSelector((state)=>state.transcMaintain);
  const stateRecommendation=useSelector((state)=>state.stateRecommendation);


  const handleOnChangeBack=()=>{
    dispatch({type:'DECREMENT'});
  }
  const handleOnChangeNext=()=>{
    dispatch({type:'INCREMENT'});
  }
  
  const validate = () => {
   

    if (stateMaintain.name==="") {
      setNameError("*name cannot be blank");
    }
    else
    {
      setNameError("");

    }
    if (validator.isEmail(stateMaintain.email) === true)
    {
      console.log("Valid email.")
      setEmailError("");
    }
    else
    {
      setEmailError("Please enter a valid Email!");
      console.log("Invalid email.");
      return false;
    }

    // if (!stateMaintain.email.includes("@")) {
    //   setEmailError("*invalid email");
    //   console.log(emailError);
    //   return false;
    // }
    // else
    // {
    //   setEmailError("");

    // }
    // if (typeof input["email"] !== "undefined") {
          
    //   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //   if (!pattern.test(input["email"])) {
    //     isValid = false;
    //     errors["email"] = "Please enter valid email address.";
    //   }
    // }
    
    if (stateMaintain.password==="") {
      setPassError("*please enter password");
    }

    

    return true;
  };
  const sendData= async(e)=>{
   e.preventDefault();

    if(validate()){
      
   
    const{radio1,
      radio2,
      university,
      cgpa,
      degree,
      transcript,
      cities,
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
      cgpa,
      degree,
      transcript,
      cities,
      skills,
      salary,
      name,
      email,
      password,
    })
    });
   
    try{
      const data = await res.json();
      if(res.status===201)
      {
        history.push("/home");
        
        const resFile = await fetch("/upload", { 
          method:"Post",
        
        });
        const sendMail = await fetch("/sendEmail", { 
          method:"Post",
          headers:{
            "Content-type": "application/json"
            },
          body: JSON.stringify({stateRecommendation,stateMaintain}),
        
        });
       
      }
    if (res.status === 422) {
    console.log(data.error);
    setEmailError("*"+data.error);
      const error = new Error(res.error);
      throw error;
  }
  }catch(err){
    console.log(err);
  }
  
  }
  }
 
return(
    <>
    <div id="part-6" className="p-5"  >
      <div>
            <h6 className="text-center">Last Step:)</h6>
            <h4 className="text-center">Let's get over with it</h4>
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
              <input {...register("name", { required: true })} onChange={(e)=>dispatch({type:'NAMESTATE',payload:e.target.value})}  type="text" className="form-control rounded-pill" name="name" id="exampleFormControlInput0" placeholder="Your Full Name"/>
               <p style={{color:"#E60023"}}>{nameError}</p> 

            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input onChange={(e)=>dispatch({type:'EMAILSTATE',payload:e.target.value})} type="email" className="form-control rounded-pill" name="email" id="exampleFormControlInput1" placeholder="Type your email address"/>
              <p style={{color:"#E60023"}}>{emailError}</p>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">Password</label>
              <input onChange={(e)=>dispatch({type:'PASSSTATE',payload:e.target.value})} type="password" className="form-control rounded-pill" name="pass" id="exampleFormControlInput2"/>
            </div>
           
            <div className="mb-3">

              <button onClick={handleOnChangeBack} id="btn-6b" type="button" className="btn btn-primary mt-3 rounded-pill"  >Back</button>
              <button onClick={(e)=>{sendData(e);}} type="button" className="btn btn-primary mt-3 ms-2 rounded-pill">Sign Up</button>
              
            </div>
            
          </div>
    </>
);
};
export {Part6}