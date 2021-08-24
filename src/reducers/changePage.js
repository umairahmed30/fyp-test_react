const pageNo=1;

const pageChange=(state=pageNo,action)=>{
    if(action.type=="INCREMENT")
    {
        return state + 1;
    }
    else if(action.type=="DECREMENT")
    {
        return state - 1;
    }
    else
    {
        return state;
    }
}

export default pageChange;