import react, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";


const ShowCandidates= ()=>{
//const[sal,setSal]=useState(props.sal);
//const[location,setLocation]=useState(props.location);
const filterState=useSelector((state)=>state.filterState);
const salary=filterState.salary;
const cityDetails=filterState.cityDetails;


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

return(
    
    <>
    <h1>show candidates</h1>
    {users?users.map(user=>(<h1>{user.name}</h1>)):<h1></h1>}
    <h2></h2>
    </>

    )
}
export default ShowCandidates;