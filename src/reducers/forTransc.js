var object={transc:"",};

const transcMaintain=(state=object,action)=>{
    if(action.type=="SAVETRANSC")
    {
        state.transc=action.payload;
        return state;
    }
    else
    {
    return state;
    }
}

export default transcMaintain;