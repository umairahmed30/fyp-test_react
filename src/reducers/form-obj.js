var object = {
    radio1: "1",
    radio2: "2" ,
    university:"",
    transcript:"",
    skills:[],
    salary:"10000",
    name:"",
    email:"",
    password:"",
    
  }

  const stateMaintain=(state=object,action)=>{
    if(action.type=="RADIO1STATE")
    {
        state.radio1=action.payload;
        return state;
    }
    else if(action.type=="RADIO2STATE")
    {
        state.radio2=action.payload;
        return state;
    }
    else if(action.type=="UNIVERSITYSTATE")
    {
        state.university=action.payload;
        return state;
    }
    else if(action.type=="TRANSCRIPTSTATE")
    {
        state.transcript=action.payload;
        return state;
    }
    else if(action.type=="SKILLSTATE")
    {
        state.skills=action.payload;
        return state;
    }
    else if(action.type=="SALARYSTATE")
    {
        state.salary=action.payload;
        return state;
    }
    else if(action.type=="NAMESTATE")
    {
        state.name=action.payload;
        return state;
    }
    else if(action.type=="EMAILSTATE")
    {
        state.email=action.payload;
        return state;
    }
    else if(action.type=="PASSSTATE")
    {
        state.password=action.payload;
        return state;
    }
    else
    {
        return state;
    }
}

export default stateMaintain;