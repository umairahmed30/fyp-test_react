var skills = {
    suggested:["html","css","javascript","react","angular"],
    moreSkills:["devops","linux","python","mysql","docker","redis","git","aws","bootstrap"],

};
  const skillsManage=(state=skills,action)=>{
    if(action.type=="UPDATESUGGESTEDSKILLS")
    {
        state.suggested=action.payload;
        return state;
    }
    else if(action.type=="UPDATEMORESKILLS")
    {
        state.moreSkills=action.payload;
        return state;
    }
  
  
    else
    {
        return state;
    }
}

export default skillsManage;