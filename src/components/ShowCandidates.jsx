import react, { useState,useEffect } from "react";
import { useDispatch,useSelector, shallowEqual } from "react-redux";


const ShowCandidates= ()=>{
//const[sal,setSal]=useState(props.sal);
//const[location,setLocation]=useState(props.location);
const filterState=useSelector((state)=>state.filterState,shallowEqual);
const salary=filterState.salary;
const cityDetails=filterState.cityDetails;
const skills=filterState.skills;

const[users,setUsers]=useState();


const getUsers= async(e)=>{
  fetch("/getUsers", { 
    method:"Post",
    headers:{
    "Content-type": "application/json"
    },
    body: JSON.stringify({
        salary,
        cityDetails,
        skills,
    })
  })
  .then(response => response.json())
  .then(result => {
    
    console.log("hello"+ result[0].cities[0].city);
    setUsers(result);
    // find video id to redirect to that video
    // client side redirect to '/video/:id'
  })
  .catch(err => console.log(err));
    };
      

  
useEffect(()=>{
    getUsers();
},[]);

useEffect(()=>{
  console.log(users);
},[users]);
useEffect(()=>{
  console.log("candidates is rerendering");
});



return(
    
    <>
    <h1>show candidates</h1>
    {users?users.map(user=>(<h1>{user.name}</h1>)):<h1></h1>}
    <h2>{filterState.salary}</h2>
    </>

    )
}
export default ShowCandidates;