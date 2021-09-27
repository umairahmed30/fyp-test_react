import react from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { connect } from "react-redux";
import { incNumber,decNumber } from "../actions";
import { type } from "jquery";
import { Link } from "react-router-dom";
const Unexp =(props)=>{
  const dispatch=useDispatch();

  const stateMaintain=useSelector((state)=>state.stateMaintain);
  const transcMaintain=useSelector((state)=>state.transcMaintain);

  const [uni,setUni]=useState(stateMaintain.university);



  
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
                          <label className="mb-2" for="ice-cream-choice">Please Enter your University Name <span style={{color:"red"}}>{props.uniErr}</span></label>
                          <input onChange={(e)=>{setUni(e.target.value)}} className="form-select  rounded-pill" list="university-list" id="ice-cream-choice" name="ice-cream-choice" value={uni} />

                          <datalist  id="university-list">
                          {universities.map(university => (
                          <option value={university}>{university}</option>
                          ))}
                          </datalist>
                          </div>
            
             
              <div className="mb-3" style={{display:props.displayInputFile}}>
                
                <label className="mb-2" for="myfile">Upload Your Transcript <span style={{color:"red"}}>{props.transErr}</span> </label>
                <input onChange={(e)=>{dispatch({type:'TRANSCRIPTSTATE',payload:e.target.files[0].name});uploadImage(e)}} className="form-control form-control-sm rounded-pill" type="file" id="myfile" />
                
  
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
const [transError,setTransError]=useState("");
const [displayInputFile,setDisplayInputFile]=useState(inputFileDisplay.fileD);


// const uploadImage= async(e)=>{
//   e.preventDefault();

//   let formdata=new FormData();
//   formdata.append("userfile", e.target.files[0]);

  
//   const res = await fetch("/upload", { 
//     method:"Post",
//     body:formdata,
  
//   })
  
// }

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
      if(stateMaintain.university==="")
      {
        setUniError("*");
      }
      else
      {
        setUniError("");
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
          console.log("hello");
          
          setDisplayInputFile("none");
          setForceReRender(!forceRerender);

          dispatch({type:'FILEDISPLAY',payload:"none"});
          dispatch({type:'INCREMENT'});

        }
        

      }
      else
      {
      setDisplayInputFile("none");
      dispatch({type:'INCREMENT'})
      }
    }
    else
    {
      setDisplayInputFile("none");
      dispatch({type:'INCREMENT'})
    }
    }



  return(
    <>
       <div id="part-1" className="p-5" >
              <h2 className="text-center">Let's Start!</h2>
              <h4 >Are you?</h4>
              <div id="radio-1" onChange={handleOnChangeRadio1}>
            <div className="form-check " >
                <input onClick={()=>{setdisable(false);}} checked={valr1[0]===stateMaintain.radio1}   className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={valr1[0]}/>
                <label className="form-check-label" for="flexRadioDefault">
                  Internee
                </label>
              </div>
              <div className="form-check">
                <input onClick={()=>{setdisable(false);}} checked={valr1[1]===stateMaintain.radio1} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={valr1[1]}/>
                <label className="form-check-label" for="flexRadioDefault">
                  Fresher
                </label>
              </div>
              <div className="form-check">
                <input onClick={()=>{setdisable(false);}} checked={valr1[2]===stateMaintain.radio1} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value={valr1[2]}/>
                <label className="form-check-label" for="flexRadioDefault">
                  Experienced
                </label>
              </div>
              </div>
              <br/>
              <form action="">
              {stateMaintain.radio1===valr1[0]||stateMaintain.radio1===valr1[1]? <Unexp uniErr={uniError} transErr={transError} displayInputFile={displayInputFile} setDisplayInputFile={setDisplayInputFile} setTransError={setTransError}/>:<div/> }
              </form>

              <h4>Where do you want to work?</h4>
              <div id="radio-2" onChange={handleOnChangeRadio2}>
              <div className="form-check">
                  <input checked={valr2[0]===stateMaintain.radio2} className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault4" value="anywhere"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Anywhere
                  </label>
                </div>
                <div className="form-check">
                  <input checked={valr2[1]===stateMaintain.radio2} className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault5" value="remote"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Remote
                  </label>
                </div>
                <div className="form-check">
                  <input checked={valr2[2]===stateMaintain.radio2} className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault6" value="office"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Office
                  </label>
                </div>
                </div>

                
              <button onClick={(e)=>{validateP1(e)}} id="btn-1" type="button" className="btn btn-primary rounded-pill mt-4" disabled={nextButton.next1[0]&&nextButton.next1[1]?false:true} >Next</button>
              </div>


    </>
)



};
export {Part1}