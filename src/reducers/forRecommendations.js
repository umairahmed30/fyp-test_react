var object = [];

const stateRecommendation=(state=object,action)=>{
    if(action.type=="ADD_RECOMM_DETAILS")
    {
        state=action.payload;
        return state;
        // return{
        // ...state,
        // state:action.payload
        // };
    }
   else
    {
        return state;
    }
}

export default stateRecommendation;