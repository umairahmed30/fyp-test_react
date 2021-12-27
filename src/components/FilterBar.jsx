import react,{useEffect, useState} from "react";
 import '../style/filter.css'
 import Box from '@mui/material/Box';
 import Slider from '@mui/material/Slider';
 import Typography from '@mui/material/Typography';
 import { useDispatch,useSelector } from "react-redux";

 const Filter= (props)=>{
    const filterState=useSelector((state)=>state.filterState);
    const dispatch=useDispatch();
    const [value, setValue] = useState();
    function valuetext(value){
        return `${value}°C`;
      }
    const val_func=(event, newValue) => {
        props.setSal(newValue);
        console.log(props.sal);
      };
    const handleSkillFilter=(event)=>{
        let skillsArr =props.skills ;
        let check = event.target.checked;
        let skill_check = event.target.value;
        if(check){
            
                props.setSkills(oldArray=>[...oldArray,skill_check])
            
        }else{ 
            var index = skillsArr.indexOf(skill_check);
           
           
                skillsArr.splice(index, 1);
                props.setSkills([...skillsArr]);
             
        }
    }
    useEffect(()=>{
      dispatch({type:'SALARYFILTER',payload:props.sal});
      dispatch({type:'SKILLSFILTER',payload:props.skills});


      console.log(props.skills);
    },[props.sal,props.skills]);
    
     
    return (
        <>
         <section id="sidebar">
    
    <div class="border-bottom pb-2 ml-2">
        <h4 id="burgundy">Filters</h4>
    </div>
    <Box className="border-bottom pb-2 ml-3 mt-2" >
    <Typography id="input-slider" gutterBottom>
    Min. Salary
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={10000}
        value={value}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        onChange={val_func}
        step={10000}
        marks
        min={10000}
        max={100000}
      />
    </Box>
    <div class="py-2 border-bottom ml-3">
        <h6 class="font-weight-bold">Job Title</h6>
        <div id="orange"><span class="fa fa-minus"></span></div>
        <form>
            <div class="form-group"> <input type="checkbox" id="artisan"/> <label for="artisan">Fresh Artisan Breads</label> </div>
            <div class="form-group"> <input type="checkbox" id="breakfast"/> <label for="breakfast">Breakfast Breads</label> </div>
            <div class="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">Healthy Breads</label> </div>
        </form>
    </div>
    <div class="py-2 border-bottom ml-3">
        <h6 class="font-weight-bold">Experience</h6>
       
        <form>
            <div class="form-group"> <input  type="checkbox" id="25off" value="internee"/> <label for="25">Internee</label> </div>
            <div class="form-group"> <input type="checkbox" id="5off" value="fresher"/> <label for="5off" id="off" >Fresher</label> </div>
            <div class="form-group"> <input type="checkbox" id="5off" value="experience"/> <label for="5off" id="off" >Experience</label> </div>

        </form>
    
   
        {/* <div id="orange"><span class="fa fa-minus"></span></div>
        <form>
            <div class="form-group"> <input type="checkbox" id="tea"/> <label for="tea">Tea Cakes</label> </div>
            <div class="form-group"> <input type="checkbox" id="cookies"/> <label for="cookies">Cookies</label> </div>
            <div class="form-group"> <input type="checkbox" id="pastries"/> <label for="pastries">Pastries</label> </div>
            <div class="form-group"> <input type="checkbox" id="dough"/> <label for="dough">Cookie Dough</label> </div>
            <div class="form-group"> <input type="checkbox" id="choco"/> <label for="choco">Chocolates</label> </div>
        </form> */}
    </div>
    <div class="py-2 ml-3">
        <h6 class="font-weight-bold">Skills</h6>
        <div id="orange"><span class="fa fa-minus"></span></div>
        <form>
            <div class="form-group"> <input onClick={handleSkillFilter} type="checkbox" id="25off" value="javascript"/> <label for="25">Javascript</label> </div>
            <div class="form-group"> <input onClick={handleSkillFilter} type="checkbox" id="5off" value="react"/> <label for="5off" id="off" >React JS</label> </div>
        </form>
    </div>
</section>
        </>
    )
}

export default Filter;