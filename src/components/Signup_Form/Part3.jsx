import react from "react";
import { useDispatch,useSelector } from "react-redux";

import { incNumber,decNumber } from "../../actions";
import { useState } from "react";
import { type } from "jquery";
const Part3 = ()=>{
  const stateMaintain=useSelector((state)=>state.stateMaintain);
  const nextButton=useSelector((state)=>state.validateButton);
  const skillsManage=useSelector((state)=>state.skillsManage);
  const dispatch=useDispatch();
  const [tempSkill,setTempSkill]=useState();
  const [tempExp,setTempExp]=useState(0);
  const [display,setdisplay]=useState("block");
  const [displayS,setdisplayS]=useState("none");
  
  const [selected,setSelected]=useState(stateMaintain.skills);
  const [suggested,setSuggested]=useState(skillsManage.suggested);
  const [moreSkills,setMoreSkills]=useState(skillsManage.moreSkills);
   const [temp,setTemp] =useState(moreSkills);
  const addSkill = (skill,exp) => {

   //setSelected( arr => [...arr, skill]); 
   setSuggested(suggested.filter(skills=>skills!=skill));
   setTemp(temp.filter(skills=>skills!=skill));

   setSelected(arr =>[...arr,
    {
      language: skill,
      experience: exp,
    }]);
    nextButton.next3++;

 
  
  }
  const removeSkill = (skill) => {

    setSelected(selected.filter(skills=>skills.language!=skill));
    setSuggested( arr => [...arr, skill]); 
    
    
   }

   const handleOnChangeBack =()=>
   {
     dispatch({type:'DECREMENT'});
     dispatch({type:'SKILLSTATE',payload:selected});
     dispatch({type:'UPDATESUGGESTEDSKILLS',payload:suggested});
     dispatch({type:'UPDATEMORESKILLS',payload:moreSkills});


   }
   const handleOnChangeNext =()=>
   {
     dispatch({type:'INCREMENT'});
     dispatch({type:'SKILLSTATE',payload:selected});
     dispatch({type:'UPDATESUGGESTEDSKILLS',payload:suggested});
     dispatch({type:'UPDATEMORESKILLS',payload:moreSkills});


   }
   const displaySkills=(val)=>
   {
     if(val!=="")
     {
        setdisplay("none");
        setdisplayS("block");
        setMoreSkills(temp.filter(s=>s.includes(val)));
        
     }
     else
     {
       setdisplay("block");
       setdisplayS("none");
     }
   }

return(
    <>
         <div id="part-3" className="p-5" >
                
                <h5>What are your top skills?</h5>
                <p>From 2 to 10</p>

                <div id="skillShowHide" style={{display:display}}>
                  <div className="me-2" id="selected">
                  {selected.map(skill=>(
                    <button className="btn btn-outline-danger mt-2 rounded-pill me-2" type="button" onClick={()=>removeSkill(skill.language)}>{skill.language+" "}<span>({skill.experience})</span></button>
                  ))}

                  </div>
                  <hr/>
                  <div id="set">
                  <h6>Sugguested Skills</h6>
                  {suggested.map(skill=>(
                    <button className="btn btn-outline-primary mt-2 rounded-pill me-2" type="button" onClick={()=>setTempSkill(skill)} data-bs-toggle="modal" data-bs-target="#exampleModal">{skill}</button>
                  ))}




                  {/* <button id="html" name="hehe" type="button"  autocomplete="off" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-primary mt-2 rounded-pill me-2">HTML <span id="htmld"></span></button> */}
                  
                </div>
                </div>
 {/* Modal  */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">How much experience do you have?</h5>
                        <button type="button" className="btn-close rounded-pill" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        
                        <div id="slider_count">Experience = <span id="sliderStatus">{tempExp}</span></div>
                          <br/>
                        <input type="range" className="form-range" min="0" max="10" step="1" id="customRange" value={tempExp} onChange={(e)=>setTempExp(e.target.value)}/ >
                      </div>
                      <div className="modal-footer">
        
                        <button onClick={()=>{addSkill(tempSkill,tempExp);setdisplay("block");setdisplayS("none");setTempExp(0)}} id="add" type="button" className="btn btn-primary mb-3 rounded-pill" data-bs-dismiss="modal">Add Experience</button>
                      </div>
                    </div>
                  </div>
                </div>
        
                
        

             
            <br/> 
            <input id="search"  onKeyUp={(e)=>displaySkills(e.target.value)} className="form-control me-2 mb-3 rounded-pill " type="search" placeholder="Search" aria-label="Search"/>
            <ul id="myUL" style={{display:displayS}} >
            {moreSkills.map(skill=>(
                    <button className="btn btn-outline-primary mt-2 rounded-pill me-2" type="button" onClick={()=>setTempSkill(skill)} data-bs-toggle="modal" data-bs-target="#exampleModal">{skill}</button>
                  ))}
            </ul>
            {/* <div id="no-skill" style="display: none;">
              <p id="skill-name" style="color: crimson;">
              </p>
              <a href="">Add it as new skill?</a>
              <p>Please check did you enter the name correct</p>
            </div>    */}
            <br/>
            <button onClick={handleOnChangeBack}  id="btn-3b" type="button" className="btn btn-primary mb-3 rounded-pill" >Back</button>
            <button onClick={handleOnChangeNext}  id="btn-3" type="button" className="btn btn-primary ms-2 mb-3 rounded-pill" disabled={nextButton.next3>=2?false:true}>Next</button>





        </div>

    </>
);
};

export {Part3}