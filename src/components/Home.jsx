import react, { useEffect } from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { connect } from "react-redux";
import { incNumber,decNumber } from "../actions";
import { type } from "jquery";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { FiDownload } from 'react-icons/fi';
import Navbar from './Navbar'
import { Redirect } from "react-router-dom";
import Cookies from 'js-cookie';
import isAuth from '../lib/isAuth';

const Home =()=>{
  const [loggedin, setLoggedin] = useState(isAuth());

  const dispatch=useDispatch();
const [jobList,setJobList]=useState([]);

  const getData= async()=>{
    
    
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
  useEffect(() => {
    getData();
 
   }, []);

   return loggedin ? (
    <>
      <div className="mt-5-c container row">
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
    </>) : (<Redirect to="/signin" />
  
  
  )}
 
  export {Home}