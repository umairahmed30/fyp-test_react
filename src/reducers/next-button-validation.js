var nextButtonValidationn = {
    next1: [false,false],
    next3:0 ,
    next5:true,
  }

  const validateButton=(state=nextButtonValidationn,action)=>{
    if(action.type=="NEXT1-1")
    {
        state.next1[0]=true;
        return state;
    }
    else if(action.type=="NEXT1-2")
    {
        state.next1[1]=true;
        return state;
    }
    else if(action.type=="NEXTSAL")
    {
        state.next5=false;
        return state;
    }
  
    else
    {
        return state;
    }
}

export default validateButton;