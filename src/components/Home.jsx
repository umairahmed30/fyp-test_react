import react, { useEffect } from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { connect } from "react-redux";
import { incNumber,decNumber } from "../actions";
import { type } from "jquery";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { FiDownload } from 'react-icons/fi';
import Navbar from './Navbar'

//import HomeIcon from '@mui/icons-material/Home';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// const StyledBreadcrumb = styled(Chip)(({ theme }) => {
//   const backgroundColor =
//     theme.palette.mode === 'light'
//       ? theme.palette.grey[100]
//       : theme.palette.grey[800];
//   return {
//     backgroundColor,
//     height: theme.spacing(3),
//     color: theme.palette.text.primary,
//     fontWeight: theme.typography.fontWeightRegular,
//     '&:hover, &:focus': {
//       backgroundColor: emphasize(backgroundColor, 0.06),
//     },
//     '&:active': {
//       boxShadow: theme.shadows[1],
//       backgroundColor: emphasize(backgroundColor, 0.12),
//     },
//   };
// }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// const CustomizedBreadcrumbs=()=> {
//   return (
//     <div  role="presentation" onClick={handleClick}>
//       <Breadcrumbs  aria-label="breadcrumb">
//         <StyledBreadcrumb  container
//   spacing={0}
//   direction="column"
//   alignItems="center"
//   justifyContent="center"
//   style={{ minHeight: '100vh' }}
//           component="a"
//           href="#"
//           label="Home"
//           icon={<FiDownload fontSize="small" />}
//         />
//         <StyledBreadcrumb component="a" href="#" label="Catalog" />
//         <StyledBreadcrumb
//           label="Accessories"
//           deleteIcon={<FiDownload />}
//           onDelete={handleClick}
//         />
//       </Breadcrumbs>
//     </div>
//   );
// }























const Home =()=>{
  const dispatch=useDispatch();
const [jobList,setJobList]=useState([]);



  const getData= async()=>{
    
      try{
        const res = await fetch("/home", { 
          method:"Get",
          headers:{
          "Content-type": "application/json"
          },
        
          
        }) 
        const data = await res.json();
        setJobList(data);
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
      }
      }catch(err){
        console.log(err);
      }
  }
  useEffect(() => {
      
    getData();
 
   }, []);


  return(
    <>
        
      
        <div className="mt-5-c container row">
{jobList.map(job => (
  <div className="col-sm-9 m-1 p-2">
  <div className="card">
    <div className="card-body">
      <h1>{job._id}</h1>
      <h5 className="card-title">{job.title}</h5>
      <p className="card-text">{job.description}</p>
      <a href="#" className="btn btn-primary">Apply</a>
    </div>
  </div>
</div>
                  
                    ))}

  
  
</div>

    </>
  
  
  )}
 
  export {Home}