import react from "react";
import { useState } from "react";
import {Link,useHistory } from "react-router-dom";

const SignIn= ()=>{

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const history=useHistory();



    const sendData= async(e)=>{
        e.preventDefault();
        
        const res = await fetch("/login", { 
          method:"Post",
          headers:{
          "Content-type": "application/json"
          },
          body: JSON.stringify({
              email,
              password,
          
        })
        });
        if(res.status==200)
        {
          history.push("/home");
        }
      }
     
    return (
        <>
            <div class="container" >
              <div class="position-relative" >
                  <form id="m-form" class="form position-absolute mt-5 top-50 start-50 w-50"  method="post">
                
                <div className="p-5">
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control rounded-pill" name="email" id="exampleFormControlInput1" placeholder="Type your email address" value={email}/>
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label" value={password}>Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control rounded-pill" name="pass" id="exampleFormControlInput2"/>
                    </div>
                    <div className="mb-3">
                        <button onClick={sendData} type="submit" className="btn btn-success" > Sign In</button>
                    </div>
                </div>
                    </form>
                </div>
        </div>
        </>
    )
}

export {SignIn}