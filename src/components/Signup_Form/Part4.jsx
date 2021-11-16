import react from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import validator from 'validator';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';

const Part4 = ()=>{
const stateMaintain=useSelector((state)=>state.stateMaintain);
const nextButton=useSelector((state)=>state.validateButton);
const stateRecommendation=useSelector((state)=>state.stateRecommendation);
const inputFileDisplay=useSelector((state)=>state.inputFileDisplay);
const [skills,setSkills]=useState(stateMaintain.skills);
const [tempEmail,setTempEmail]=useState("");
const [display,setdisplay]=useState(inputFileDisplay.emailD);
const [tempo,setTempo]=useState("");
const [rTable,setRtable]=useState(stateRecommendation);
const [emailSkills,setEmailSkills]=useState([]);
const [emailError,setEmailError]=useState("");
const [emailSkillError,setEmailSkillError]=useState("");
const dispatch=useDispatch();
let [upto3,setUpto3]=useState(0);

let id=0;





//uper test
const addJson =()=>
{
  if (validator.isEmail(tempEmail) === true)
  {
    
    console.log("Valid email.")
    setEmailError("");
          if(emailSkills.length!==0)
          {
            setEmailSkillError("");
              setRtable(arr =>[...arr,
                
                {
                  email: tempEmail,
                  rskill: emailSkills,
                }]);

                setEmailSkills([]);
                setTempo("");
                setTempEmail("");
                setUpto3(++upto3);
                console.log(upto3);
                if(upto3>=3)
                {
                  setdisplay("none");
                }
              }
              else
              {
                setEmailSkillError("Please enter some skills");
                console.log("no skill");
                return false;
              }
    }
    else
        {
          setEmailError("Please enter a valid Email!");
          console.log("Invalid email.");
          return false;
        }       
    
}
const editRecommendation = (skill) => {
  {skill.map(sskill=>(
    setEmailSkills(arr =>[...arr,
    {
      language: sskill.language,
      experience: sskill.experience,
    }])

  ))};
              
};

    


const addSkill = (skill) => {
  console.log(skill);
  if(!emailSkills.find(ski=>ski.language===skill.language))
  {
    setEmailSkills(arr =>[...arr,
    {
      language: skill.language,
      experience: skill.experience,
    }]);
    
  }

  
};

const handleOnChangeBack=()=>{
  dispatch({type:'ADD_RECOMM_DETAILS',payload:rTable});
  dispatch({type:'DECREMENT'});
}
const handleOnChangeNext=()=>{
  dispatch({type:'ADD_RECOMM_DETAILS',payload:rTable});
  dispatch({type:'INCREMENT'});
}

const RESkill=(language)=>{
 console.log(language);
  setEmailSkills(emailSkills.filter(skill=>skill.language!==language));
}
const RSkill=(email)=>{
  setUpto3(--upto3);
  console.log(upto3);
  if(upto3<=3)
  {
    setdisplay("inline-block");
  }  
  
  setRtable(rTable.filter(table=>table.email!==email));
}
 
return(
    <>
    <div id="part-4" className="p-5" >
                <h5>Ask Recommendations!</h5>
                <p>You can ask your teachers for the recommendations for the skills which you have selected</p>
          <div id="skilset">
          {skills.map(skill=>(
                    <button onClick={()=>addSkill(skill)} className="btn btn-outline-danger mt-2 rounded-pill me-2" type="button">{skill.language}<span>({skill.experience})</span></button>
                  ))}            
          </div>
          <hr/>
          <div id="recommendations" > 
            <div className="mb-3 row g-3" style={{display:display}}>
              <div className="col-auto">
                <label for="exampleFormControlInput4" className="form-label">Enter your Teacher's Email address for recommendations</label>
                <input onChange={(e)=>{setTempEmail(e.target.value);setTempo(e.target.value)}} type="email" className="form-control rounded-pill" id="exampleFormControlInput4" placeholder="name@example.com"value={tempo}/>
                <button onClick={addJson} id="email-btn-1" type="button" className="btn btn-primary mt-4 rounded-pill"  >Add</button>
              
            
             
            </div>
            <div className="col-auto">
              <p style={{color:"#E60023"}}>{emailError}</p>
              <p style={{color:"#E60023"}}>{emailSkillError}</p>

              {emailSkills.map(skill=>(
                    <button className="btn btn-outline-success mt-2 rounded-pill me-2" type="button" onClick={()=>{RESkill(skill.language)}}>{skill.language}<span>({skill.experience})</span></button>
                  ))}  
            </div>
          
          
           </div>
           <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Skills</th>
      <th scope="col">Edit/Delete</th>
    </tr>
  </thead>
  <tbody>
    
     {rTable.map(r=>( <tr>
      <th scope="row">{id++}</th>
      <td>{r.email}</td>
      <td>{r.rskill.map(skill=>(<span>{skill.language+" "}</span>))}</td>
      <td>
        <button id="" type="button" className="btn me-1"  onClick={(e)=>{e.preventDefault();RSkill(r.email);editRecommendation(r.rskill);setTempo(r.email);setTempEmail(r.email)}}><FaEdit/></button>
        <button id="" type="button" className="btn" onClick={()=>{RSkill(r.email)}}  ><MdDeleteOutline/></button>
      </td>
    </tr>))}

   
  </tbody>
</table>
            /

           
           
            
            </div>
            <button id="btn-4b" onClick={handleOnChangeBack} type="button" className="btn btn-primary mb-3 mt-3 rounded-pill"  >Back</button>
            <button id="btn-4" onClick={handleOnChangeNext} className="btn btn-outline-primary mb-3 mt-3 ms-2 rounded-pill">Next</button>
          </div>
      </>
);
};

export {Part4}