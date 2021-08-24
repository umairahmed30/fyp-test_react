var object = {
    radio1: "1",
    radio2: "2" ,
    university:"",
    transcript:"",
    
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
    else
    {
        return state;
    }
}

export default stateMaintain;