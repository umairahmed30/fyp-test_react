import React from 'react'
import "./Rform.scss";
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {Link,useHistory } from "react-router-dom";
import { FiDownload } from 'react-icons/fi';
const Recommendation = () => {
  const [user,setUser]=useState();
  const [userId,setUserId]=useState();
  const [userEmail,setUserEmail]=useState();
  const history=useHistory();
  const [transcript,setTranscript]=useState();
  const [uni,setUni]=useState();
  const[cgpa,setCgpa]=useState();
  const [degree,setDegree]=useState();

  const[iName,setIName]=useState("");


  const [questions,setQuestions]=useState([]);
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  const {email}=useParams();
  const get_questions= async()=>{
      try{
        const res = await fetch("/getquestion", { 
          method:"Get",
          headers:{
          "Content-type": "application/json"
          },
        
          
        }) 
        const data = await res.json();
        setQuestions(data);
        console.log(questions);
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
      }
      }catch(err){
        console.log(err);
      }
  }  
  
  
  const findU= async()=>{
      console.log("findU");
      const res = await fetch("/findUser", { 
        method:"Post",
        headers:{
        "Content-type": "application/json"
        },
        body: JSON.stringify({
        email
      })
      });
      try{
        const data = await res.json();
        if(res.status===200)
        {
          //setUser(data);
          //data.map(user=>{setUser(user)});
          setUser(data[0].name);
          setUserId(data[0]._id);
          setUserEmail(data[0].email);
          setTranscript(data[0].transcript);
          setUni(data[0].university);
          setCgpa(data[0].cgpa);
          setDegree(data[0].degree);
         console.log(data);
        }
      if (res.status === 422) {
      console.log(data.error);
        const error = new Error(res.error);
        throw error;
    }
    }catch(err){
      console.log(err);
    }


    }

    useEffect(() => {
      
     findU();
     get_questions();
     
  
    }, []);

    //const formData = new FormData();
    let formdata={"user_id":userId,
                  "instructor":iName,
                  "answer":[]};
let answer=[]
    formdata.user_id=userId;
    const add_data=(e,id)=>{
      answer= answer.filter(function( obj ) {
        return obj.qid !== id;
    });
    
      answer.unshift({
        "qid":id,
       "answer":e.target.value

      });
      console.log(formdata);
    //   formData.delete(id);
    //   formData.append(id, e.target.value);
    //   //console.log(formData);
    //   console.log(id);
    //   for (var value of formData.values()) {
    //     console.log(value);
    //  }
    };
  //   function formDataToJson(formData) {
  //     const obj = {};
  //     formData.forEach((value, key) => { 
  //         obj[key] = value
  //     });
  //     return JSON.stringify(obj);
  // }
    
    const send_recomm_data=async (e)=>{
      e.preventDefault();
      formdata.answer=answer;
      const res = await fetch("/rFormData", {
        method: "POST",
       
         headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(formdata),
      });
      
      try {
            const data = await res.json();
            if(res.status===201)
            {
                history.push("/thankyou");
            }
        }
      catch(err)
        {
          console.log(err);
        } 

    }


  
    return (
        <div className="form-wrapper">
      <div className="student-form mt-4">
        <h1>Student Recommendation Form</h1>
        <form action="" className="main-form">
          <div className="row">
            
           <h3>Name:{user}</h3>
           <h5>Email:{userEmail}</h5>
           <h5>Date:{today}</h5>
           
           <div className="col-12">
             <h5>University:{uni}</h5>
            </div>
            <div className="col-12">
             <h5>Degree:{degree}</h5>
            </div>
            <div className="col-12">
             <h5>CGPA:{cgpa}</h5>
            </div>
            <div className="col-12">
             <a href="/logo192.png" className="btn btn-primary" type="button" download><FiDownload /> Download Students Transcript</a>
            </div>
            <div className="col-6">
              <div className="form-field">
                <label htmlFor="" className="label">
                  Instructor Name
                </label>
                <input onChange={(e)=>{setIName(e.target.value);console.log(iName)}}
                  type="text"
                  className="custom-input"
                  placeholder="Name"
                />
              </div>
            </div>
           
          
           
            <div className="col-12">
            <h4>Please rate the student in terms of following characteristics</h4>
            <ul className="header-ilst mt-2">
                  <li className="single-header-content"></li>
                  <li className="single-header-content">Very Good</li>
                  <li className="single-header-content">Good</li>
                  <li className="single-header-content">Fair</li>
                  <li className="single-header-content">Poor</li>
                  <li className="single-header-content ">Very Poor</li>
                </ul>
            
                                {questions.map(quest=>(<>
      
              <div className="form-field">

                <ul className="content-list">
                  <li className="content-single">
                  {quest.question}
                  
                  </li>

                  <div class="form-check form-check-inline ms-5 me-5">
  <input onClick={(e)=>{add_data(e,quest._id)}} class="form-check-input" type="radio" name={quest._id} id="inlineRadio1" value="Very Good"/>
</div>
<div class="form-check form-check-inline ms-5 me-5">
  <input onClick={(e)=>{add_data(e,quest._id)}} class="form-check-input" type="radio" name={quest._id} id="inlineRadio2" value="Good"/>

</div>
<div class="form-check form-check-inline ms-5 me-5">
  <input onClick={(e)=>{add_data(e,quest._id)}} class="form-check-input" type="radio" name={quest._id} id="inlineRadio3" value="Fair" />
</div>
<div class="form-check form-check-inline ms-5 me-5">
  <input onClick={(e)=>{add_data(e,quest._id)}} class="form-check-input" type="radio" name={quest._id} id="inlineRadio3" value="Poor" />
</div>
<div class="form-check form-check-inline ms-5 me-5">
  <input onClick={(e)=>{add_data(e,quest._id)}} class="form-check-input" type="radio" name={quest._id} id="inlineRadio3" value="Very Poor" />
</div>


                  
                </ul>
                </div>
                </>
))}
                </div>
             
            <div className="col-12">
              <div className="form-field">
                <label htmlFor="" className="label">
                 Comments
                </label>
                <textarea class="custom-textarea" rows="3"></textarea>
              </div>
            </div>

            
          </div>
          <div class="d-flex justify-content-center">
          <button onClick={(e)=>{send_recomm_data(e)}} id="submit" type="button" className="btn btn-primary mt-4" >Submit</button>

          </div>

        </form>
      </div>
    </div>
    )
}

export default Recommendation
