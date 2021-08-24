import react from "react";
import PageShifter from "./AllContext";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";

import { incNumber,decNumber } from "./actions";
const Unexp =()=>{


  return(

    <>
    <div id="criteria" >
              <div className="mb-3">
                <select id="xyz" className="form-select  rounded-pill" aria-label="Default select example">
                  <option value="1" selected>Select University</option>
                  <option value="University of the Punjab">University of the Punjab</option>
                  <option value="University of Engineering and Technology">University of Engineering and Technology</option>
                  <option value="University of Central Punjab">University of Central Punjab</option>
                  <option value="University of Lahore">University of Lahore</option>
                  <option value="Government College University">Government College University</option>
                  <option value="COMSATS">COMSATS</option>
                </select>
  
              </div>
              <div className="mb-3">
                <p  id="uni">Couldn't find your university?</p>

              </div>
              <div className="mb-3">
                <input className="form-control" type="text" name="" id="inp"/>

              </div>
              <div className="mb-3">
                <label for="myfile">Upload Your Transcript </label>
                <br/>
                <input className="form-control  rounded-pill" type="file" id="myfile" name="myfile"/>
                
  
              </div>
              </div>
    </>

  )
};






const Part1 = ()=>{
const [disable,setdisable]=useState(true);
const [unexpshow,setunexpshow]=useState(false);
const stateMaintain=useSelector((state)=>state.stateMaintain);

    
const dispatch=useDispatch();
const valr1=["internee","fresher","experienced"];

const valr2=["anywhere","remote","office"];

const handleOnChange = (e) => {
  dispatch({type:'RADIO1STATE',payload:e.target.value});

}



  return(
    <>
       <div id="part-1" className="p-5" >
              <h2 className="text-center">Let's Start!</h2>
              <h4 >Are you?</h4>
              <div id="radio-1" onChange={handleOnChange}>
            <div className="form-check " >
                <input onClick={()=>{setdisable(false);setunexpshow(true);}} checked={valr1[0]===stateMaintain.radio1}   className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={valr1[0]}/>
                <label className="form-check-label" for="flexRadioDefault">
                  Internee
                </label>
              </div>
              <div className="form-check">
                <input onClick={()=>{setdisable(false);setunexpshow(true);}} checked={valr1[1]===stateMaintain.radio1} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="fresher"/>
                <label className="form-check-label" for="flexRadioDefault">
                  Fresher
                </label>
              </div>
              <div className="form-check">
                <input onClick={()=>{setdisable(false);setunexpshow(false);}} checked={valr1[2]===stateMaintain.radio1} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="experienced"/>
                <label className="form-check-label" for="flexRadioDefault">
                  Experienced
                </label>
              </div>
              </div>
              <br/>
              {unexpshow? <Unexp/>:<div/> }
            

              <h4>Where do you want to work?</h4>
              <div className="form-check">
                  <input onClick={()=>{dispatch({type:'RADIO2STATE',payload:"anywhere"})}} className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault4" value="anywhere"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Anywhere
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault5" value="remote"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Remote
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault6" value="office"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Office
                  </label>
                </div>

                
              <button onClick={()=>{dispatch({type:'INCREMENT'})}} id="btn-1" type="button" className="btn btn-primary rounded-pill " disabled={disable} >Next</button>
              </div>


    </>
)



};
export {Part1}