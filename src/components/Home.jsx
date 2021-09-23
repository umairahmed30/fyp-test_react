import react from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { connect } from "react-redux";
import { incNumber,decNumber } from "../actions";
import { type } from "jquery";
const Home =()=>{
  const dispatch=useDispatch();
const [jobList,setJobList]=useState([]);



  const getData= async(e)=>{
    e.preventDefault();
      try{
        const res = await fetch("/home", { 
          method:"Get",
          headers:{
          "Content-type": "application/json"
          },
        
          
        }) 
        const data = await res.json();
        setJobList(data);
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
      }
      }catch(err){
        console.log(err);
      }
  }
 


  return(
    <>
        
        <button onClick={getData}>hsws</button>
        <div className="container row">
{jobList.map(job => (
  <div className="col-sm-9 m-1 p-2">
  <div className="card">
    <div className="card-body">
      <h1>{job._id}</h1>
      <h5 className="card-title">{job.title}</h5>
      <p className="card-text">{job.description}</p>
      <a href="#" className="btn btn-primary">Apply</a>
    </div>
  </div>
</div>
                  
                    ))}

  
  
</div>

    </>
  
  
  )}
 
  export {Home}