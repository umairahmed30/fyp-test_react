var object={fileD:"block",
            emailD:"inline-block",
            emailCount:0};

const inputFileDisplay=(state=object,action)=>{
    if(action.type=="FILEDISPLAY")
    {
        state.fileD=action.payload;
        return state;
    }
    else if(action.type=="ADDEMAILDISPLAY")
    {
        state.emailD=action.payload;
        return state;
    }
    else
    {
        return state;
    }
}

export default inputFileDisplay;