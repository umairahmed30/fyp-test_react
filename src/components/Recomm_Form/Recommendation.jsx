import React from 'react'
import "./Rform.scss";
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { FiDownload } from 'react-icons/fi';
const Recommendation = () => {
  const [user,setUser]=useState();
  const [userEmail,setUserEmail]=useState();
  const [transcript,setTranscript]=useState();
  const [uni,setUni]=useState();
  const[cgpa,setCgpa]=useState();
  const [degree,setDegree]=useState();


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

  
    return (
        <div className="form-wrapper">
      <div className="student-form mt-4">
        <h1>Student Recommendation Form</h1>
        <form action="" className="main-form" method="get">
          <div className="row">
           <h2>Name:{user}</h2>
           <h4>Email:{userEmail}</h4>
           <h4>Date:{today}</h4>
           
           <div className="col-12">
             <h4>University:{uni}</h4>
            </div>
            <div className="col-12">
             <h4>Degree:{degree}</h4>
            </div>
            <div className="col-12">
             <h4>CGPA:{cgpa}</h4>
            </div>
            <div className="col-12">
             <a href="/" className="btn btn-primary" type="button" download={transcript}><FiDownload /> Download Students Transcript</a>
            </div>
            <div className="col-6">
              <div className="form-field">
                <label htmlFor="" className="label">
                  Instructor Name
                </label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Name"
                />
              </div>
            </div>
           
            <div className="col-12">
              <div className="form-field">
                <label htmlFor="" className="label">
                  Please List the class or classes you have taken with this
                  instructor
                </label>
                <textarea class="custom-textarea" rows="3"></textarea>
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
                  <li className="single-header-content">Very Poor</li>
                </ul>
            
                                {questions.map(quest=>(<>
              <div className="form-field">

                <ul className="content-list">
                  <li className="content-single">
                  {quest.question}
                  
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id={quest._id} name={quest._id+"radio-group"} value="Very Good" />
                      <label for={quest._id}></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id={quest._id} name={quest._id+"radio-group"} value="Good" />
                      <label for={quest._id}></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id={quest._id} name={quest._id+"radio-group"} value="Fair" />
                      <label for={quest._id}></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id={quest._id} name={quest._id+"radio-group"} value="Poor" />
                      <label for={quest._id}></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id={quest._id} name={quest._id+"radio-group"} value="Very Poor"/>
                      <label for={quest._id}></label>
                    </div>
                  </li>
                </ul>
                </div>
                </>
))}
                </div>
                <div className="col-12">
              <div className="form-field">
              <h4 >Attendance</h4>
              <div id="radio-1">
            <div className="form-check " >
                <input  className="form-check-input ms-1 " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label ms-1" for="flexRadioDefault">
                  Excellent
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input ms-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label ms-1" for="flexRadioDefault">
                  Good
                </label>
              </div>
              <div className="form-check">
                <input  className="form-check-input ms-1" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                <label className="form-check-label ms-1" for="flexRadioDefault">
                  Fair
                </label>
              </div>
              </div>
              </div>
            </div>

            
          </div>
          <div class="d-flex justify-content-center">
          <button id="submit" type="submit" className="btn btn-primary mt-4" >Submit</button>

          </div>

        </form>
      </div>
    </div>
    )
}

export default Recommendation
