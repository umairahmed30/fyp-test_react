import react from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
const Part4 = ()=>{
const stateMaintain=useSelector((state)=>state.stateMaintain);
const nextButton=useSelector((state)=>state.validateButton);
const [skills,setSkills]=useState(stateMaintain.skills);
const [tempEmail,setTempEmail]=useState();
const [display,setdisplay]=useState("block");
const [tempo,setTempo]=useState("");
const [rTable,setRtable]=useState([]);
const [emailSkills,setEmailSkills]=useState([]);
const dispatch=useDispatch();
const [upto3,setUpto3]=useState(0);

let id=0;





//uper test
const addJson =()=>
{
  

  setRtable(arr =>[...arr,
    
    {
      email: tempEmail,
      rskill: emailSkills,
    }]);

    setEmailSkills([]);
    setTempo("");
    setUpto3(upto3+1);
    if(upto3>=3)
    {
      setdisplay("none");
    }
    
    
}
const editRecommendation = (skill) => {
  {skill.map(sskill=>(
    setEmailSkills(arr =>[...arr,
    {
      language: sskill.language,
      experience: sskill.experience,
    }])

  ))}
  setdisplay("block");
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
  dispatch({type:'DECREMENT'});
}
const handleOnChangeNext=()=>{
  dispatch({type:'INCREMENT'});
}

const RESkill=(language)=>{
 console.log(language);
  setEmailSkills(emailSkills.filter(skill=>skill.language!==language));
}
const RSkill=(email)=>{
  
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
            <div className="mb-3 row g-3" >
              <div className="col-auto">
              <label for="exampleFormControlInput4" className="form-label">Enter your Teacher's Email address for recommendations</label>
              

        
              
              <input onChange={(e)=>{setTempEmail(e.target.value);setTempo(e.target.value)}} type="email" className="form-control" id="exampleFormControlInput4" placeholder="name@example.com"value={tempo}/>
              {emailSkills.map(skill=>(
                    <button className="btn btn-outline-success mt-2 rounded-pill me-2" type="button" onClick={()=>{RESkill(skill.language)}}>{skill.language}<span>({skill.experience})</span></button>
                  ))}  
            </div>
          
            <div className=" col-auto">
              <button onClick={addJson} id="email-btn-1" type="button" className="btn btn-primary mt-4 rounded-pill"  >Add</button>
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
      <td><button className="btn btn-success rounded-pill btn-sm me-1" onClick={()=>{RSkill(r.email);editRecommendation(r.rskill);setTempo(r.email);}}>Edit</button>
        <button id="" type="button" className="btn btn-danger rounded-pill btn-sm" onClick={()=>{RSkill(r.email)}}  >Delete</button></td>
    </tr>))}

   
  </tbody>
</table>
            

           
           
            
            </div>
            <button id="btn-4b" onClick={handleOnChangeBack} type="button" className="btn btn-primary mb-3 mt-3 rounded-pill"  >Back</button>
            <button id="btn-4" onClick={handleOnChangeNext} className="btn btn-outline-primary mb-3 mt-3 ms-2 rounded-pill">Next</button>
          </div>
      </>
);
};

export {Part4}