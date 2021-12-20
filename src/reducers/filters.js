var filter = {
    radio1: "1",
    radio2: "2" ,
    university:"",
    cgpa:"",
    degree:"",
    transcript:"",
    cities:[],
    skills:[],
    cityDetails:[],
    salary:"10000",
    name:"",
    
    email:"",
    password:"",
    
  }

  const filterState=(state=filter,action)=>{
    if(action.type=="SALARYFILTER")
    {
        state.salary=action.payload;
        return state;
    }
    else  if(action.type=="CITIES")
    {
        state.cityDetails=action.payload;
        return state;
    }
    
    else
    {
        return state;
    }
}

export default filterState;