var object = [];

const stateRecommendation=(state=object,action)=>{
    if(action.type=="ADD_RECOMM_DETAILS")
    {
        return{
        ...state,
        state:action.payload
        };
    }
   else
    {
        return state;
    }
}

export default stateRecommendation;