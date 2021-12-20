import react from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { connect } from "react-redux";
import { incNumber,decNumber } from "../../actions";
import { type } from "jquery";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import TagsInput from "../tagsinput";
import MultipleSelectChips from "../chip";
const Unexp =(props)=>{
  const dispatch=useDispatch();

  const stateMaintain=useSelector((state)=>state.stateMaintain);
  const transcMaintain=useSelector((state)=>state.transcMaintain);

  const [uni,setUni]=useState(stateMaintain.university);
  const[cgpa,setCgpa]=useState(stateMaintain.cgpa);
  const [degree,setDegree]=useState(stateMaintain.degree);
  


  
  const setUniValue  = (e) => {
    dispatch({type:'UNIVERSITYSTATE',payload:e.target.value});
    // dispatch({type:'NEXT1-2'});
    
    
  
  }
  const universities=["University of the Punjab","University of Central Punjab","University of Engineering and Technology"
,"University of Lahore",]

const uploadImage= async(e)=>{
  e.preventDefault();

  
  transcMaintain.transc=new FormData();
  transcMaintain.transc.append("transcript", e.target.files[0]);
 props.setTransError("");

  
  
  
}

  return(

    <>
    <div id="criteria" >
                          <div className="mb-3"  onChange={setUniValue}>
                          <label className="mb-2" for="ice-cream-choice">University Name <span style={{color:"red"}}>{props.uniErr}</span></label>
                          <input onChange={(e)=>{setUni(e.target.value)}} className="form-control  rounded-pill" list="university-list" id="ice-cream-choice" name="ice-cream-choice" value={uni} />

                          <datalist  id="university-list">
                          {universities.map(university => (
                          <option value={university}>{university}</option>
                          ))}
                          </datalist>
                          </div>
                          <div class="input-group">
  <span class="input-group-text rounded-pill-custom0">CGPA<span style={{color:"red"}}>{props.cgpaError}</span></span>
  <input onChange={(e) => {dispatch({type:'CGPASTATE',payload:e.target.value});setCgpa(e.target.value)}} type="text" aria-label="First name" class="form-control" value={cgpa}/>
  
  
  <select onChange={(e) => {dispatch({type:'DEGREESTATE',payload:e.target.value})}} class="form-select rounded-pill-custom1" id="inputGroupSelect01">
    <option selected>Degree</option><span style={{color:"red"}}>{props.degreeError}</span>
    <option value="BS Software Engineering">BS Software Engineering</option>
    <option value="BS Computer Science">BS Computer Science</option>
    <option value="BS Information Technology">BS Information Technology</option>
  </select>

</div>
            
             
              <div className="mb-3" style={{display:props.displayInputFile}}>
                
                <label className="mb-2 mt-2" for="myfile">Upload Your Transcript <span style={{color:"red"}}>{props.transErr}</span> </label>
                <input onChange={(e)=>{dispatch({type:'TRANSCRIPTSTATE',payload:e.target.files[0].name});uploadImage(e)}} className="form-control rounded-pill" type="file" id="myfile" />
                
  
              </div>
              </div>
    </>

  )
};






const Part1 = ()=>{
const [disable,setdisable]=useState(true);
const [forceRerender,setForceReRender]=useState(false)
const stateMaintain=useSelector((state)=>state.stateMaintain);
const nextButton=useSelector((state)=>state.validateButton);
const inputFileDisplay=useSelector((state)=>state.inputFileDisplay);
const [transcript,setTranscript]=useState("");
const dispatch=useDispatch();
const valr1=["internee","fresher","experienced"];
const valr2=["anywhere","remote","office"];
const [uniError,setUniError]=useState("");
const [cgpaError,setCgpaError]=useState("");
const [degreeError,setDegreeError]=useState("");
const [selectedCity,setSelectedCity]=useState([]);
const [transError,setTransError]=useState("");
const [displayInputFile,setDisplayInputFile]=useState(inputFileDisplay.fileD);
const [cities,setCities]=useState();
const [showCity,setShowCity]=useState(false);

function get_cities_data()
{
  async function getIP(){
    const response = await fetch('http://api.ipify.org/?format=json');
    const data = await response.json();
    return data;
    }
    getIP().then(data => {
        fetch(`http://ip-api.com/json/${data.ip}`)
        .then( res => res.json())
        .then(response => {
          fetch(`/getcity?country=${response.country}`, {
            method: 'GET',
            
          })
          .then(response => response.json())
          .then(result => {
            console.log('Success:', result);
            setCities(result);
            
          })
          .catch(error => {
            console.error('Error:', error);
          });
       

              
              })
        .catch((data, status) => {
          console.log('Request failed:', data);
        });

    });

  }
  
  const displaySkills=(val)=>
  {
    console.log("display skills");   
    //for all cities
       fetch(`/getcities?val=${val}`, {
        method: 'GET',
        
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        setCities(result);
        
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }
  

useEffect(() => {
    //for ip
    
    get_cities_data();
  
 
},[])

const handleOnChangeRadio1 = (e) => {
   dispatch({type:'RADIO1STATE',payload:e.target.value});
   dispatch({type:'NEXT1-1'});
   setForceReRender(!forceRerender);
   

}
const handleOnChangeRadio2 = (e) => {
  dispatch({type:'RADIO2STATE',payload:e.target.value});
  dispatch({type:'NEXT1-2'});
  setForceReRender(!forceRerender);
  }


  const validateP1 = (e) => {
    if(stateMaintain.radio1!=="experienced")
    {
      let count=0;
      if(stateMaintain.university==="")
      {
        setUniError("*");
      }
      else
      {
        setUniError("");
        count++;
      }
      if(stateMaintain.cgpa==="")
      {
        setCgpaError("*");
      }
      else
      {
        setCgpaError("");
        count++;
      }
      if(stateMaintain.degree==="")
      {
        setDegreeError("*");
      }
      else
      {
        setDegreeError("");
        count++
      }
      if(stateMaintain.transcript==="")
      {
        setTransError("*");
      }
      else if(stateMaintain.transcript!=="")
      {
        const transcript=stateMaintain.transcript
        var allowedFiles = [".doc", ".docx", ".pdf"];
        var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
        //var regex =new RegExp("/\.pdf$/");
        if (!regex.test(transcript.toString().toLowerCase())) {
            setTransError( "Please upload files having extensions: <b>" + allowedFiles.join(', ') + "</b> only.");
        }
        else
        {
          setTransError("");
          count++;
          console.log("hello");
          
          //setForceReRender(!forceRerender);

        }
        

      }
      if(count===4)
      {
        console.log(count);
      setDisplayInputFile("none");
      dispatch({type:'FILEDISPLAY',payload:"none"});
      dispatch({type:'CITYSTATE',payload:selectedCity});
      dispatch({type:'INCREMENT'});
      }
      
    }
    else
    {
      setDisplayInputFile("none");
      dispatch({type:'CITYSTATE',payload:selectedCity});
      dispatch({type:'INCREMENT'})
    }
    }
    function handleSelecetedTags(items) {
      console.log(items);
    }


  return(
    <>
    
       <div id="part-1" className="p-5" >
              <h2 className="text-center">Let's Start!</h2>
              <h4 >Are you?</h4>
              <div id="radio-1" onChange={handleOnChangeRadio1}>
            <div className="form-check " >
                <input onClick={()=>{setdisable(false);}} checked={valr1[0]===stateMaintain.radio1}   className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={valr1[0]}/>
                <label className="form-check-label" for="flexRadioDefault1">
                  Internee
                </label>
              </div>
              <div className="form-check">
                <input onClick={()=>{setdisable(false);}} checked={valr1[1]===stateMaintain.radio1} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={valr1[1]}/>
                <label className="form-check-label" for="flexRadioDefault2">
                  Fresher
                </label>
              </div>
              <div className="form-check">
                <input onClick={()=>{setdisable(false);}} checked={valr1[2]===stateMaintain.radio1} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value={valr1[2]}/>
                <label className="form-check-label" for="flexRadioDefault3">
                  Experienced
                </label>
              </div>
              </div>
              <br/>
              <form action="">
              {stateMaintain.radio1===valr1[0]||stateMaintain.radio1===valr1[1]? <Unexp uniErr={uniError} transErr={transError} cgpaError={cgpaError} degreeError={degreeError} displayInputFile={displayInputFile} setDisplayInputFile={setDisplayInputFile} setTransError={setTransError}/>:<div/> }
              </form>

              <h4>Where do you want to work?</h4>
              <div id="radio-2" onChange={handleOnChangeRadio2}>
              <div className="form-check">
                  <input checked={valr2[0]===stateMaintain.radio2} className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault4" value="anywhere"/>
                  <label className="form-check-label" for="flexRadioDefault4">
                    Anywhere
                  </label>
                </div>
                <div className="form-check">
                  <input checked={valr2[1]===stateMaintain.radio2} className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault5" value="remote"/>
                  <label className="form-check-label" for="flexRadioDefault5">
                    Remote
                  </label>
                </div>
                <div className="form-check">
                  <input onClick={()=>{setShowCity(true)}} checked={valr2[2]===stateMaintain.radio2} className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault6" value="office"/>
                  <label className="form-check-label" for="flexRadioDefault6">
                    Office
                  </label>
                </div>
               
                <div className="form-check">
          
                
               
                
                
                
              
                {showCity?<div>
                  <input id="search" onKeyUp={(e)=>displaySkills(e.target.value)}  className="form-control me-2 mb-3 rounded-pill " type="search" placeholder="Search" aria-label="Search"/>

                </div>:<div/>}
                {showCity?cities.map(citi=>(
                    <button onClick={()=>setSelectedCity(oldArray => [...oldArray, {city:citi.city,lng:citi.lng,lat:citi.lat}])} className="btn btn-outline-primary mt-2 rounded-pill me-2" type="button" >{citi.city}</button>
                )) 
                :<div/>}
                  
                </div>
                <div className="form-check">
                  {selectedCity.map(city=>(<button className="btn btn-outline-success mt-2 rounded-pill me-2">{city.city}</button>))}

                </div>

                </div>

                
              <button onClick={(e)=>{validateP1(e)}} id="btn-1" type="button" className="btn btn-primary mt-4" disabled={nextButton.next1[0]&&nextButton.next1[1]?false:true} >Next</button>
              </div>


    </>
)



};
export {Part1}