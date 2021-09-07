import react from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
const Part4 = ()=>{
const stateMaintain=useSelector((state)=>state.stateMaintain);
const nextButton=useSelector((state)=>state.validateButton);
const [skills,setSkills]=useState(stateMaintain.skills);
const [tempEmail,setTempEmail]=useState();
const [rTable,setRtable]=useState([]);
const [emailSkills,setEmailSkills]=useState([]);
const dispatch=useDispatch();
let id=0;

const addJson =()=>
{
  
const temp=[];
emailSkills.map(skill=>(temp.push(skill.language)));
  setRtable(arr =>[...arr,
    
    {
      email: tempEmail,
      rskill: temp,
    }]);

    console.log(temp);
    setEmailSkills([]);
    
}


const addSkill = (skill) => {

  setEmailSkills(arr =>[...arr,
   {
     language: skill.language,
     experience: skill.experience,
   }]);
   
  }

const handleOnChangeBack=()=>{
  dispatch({type:'DECREMENT'});
}
const handleOnChangeNext=()=>{
  dispatch({type:'INCREMENT'});
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
            <div className="mb-3 row g-3">
              <div className="col-auto">
              <label for="exampleFormControlInput4" className="form-label">Enter your Teacher's Email address for recommendations</label>
              <input onChange={(e)=>setTempEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput4" placeholder="name@example.com"/>
              {emailSkills.map(skill=>(
                    <button className="btn btn-outline-danger mt-2 rounded-pill me-2" type="button">{skill.language}<span>({skill.experience})</span></button>
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
      <td>{r.rskill.map(skill=>(<span>{skill}</span>))}</td>
      <td><button id="email-btn-1" type="button" className="btn btn-danger rounded-pill btn-sm"  >Delete</button></td>
    </tr>))}

   
  </tbody>
</table>
            

           
           
            
            </div>
            <button id="btn-4b" onClick={handleOnChangeBack} type="button" className="btn btn-primary mb-3 mt-3 rounded-pill"  >Back</button>
            <button id="btn-4" onClick={handleOnChangeNext} className="btn btn-outline-primary mb-3 mt-3 rounded-pill">Next</button>
          </div>
      </>
);
};

export {Part4}