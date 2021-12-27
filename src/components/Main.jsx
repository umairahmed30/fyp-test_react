import react, { useState,useEffect } from "react";
// import App from "./Map/App";
import NavbarH from "./NavbarH";
import Filter from "./FilterBar";
import ProminentAppBar from "./NavbarH";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Map from "./Map/Map";
import Map_S from "./Cluster/Cluster"
import { QueryClient, QueryClientProvider } from "react-query";
import {SearchBar} from "./search";
import {Footer} from './Footer';
import { useDispatch,useSelector, shallowEqual } from "react-redux";


const queryClient = new QueryClient();

const Main= ()=>{

  const filterState=useSelector((state)=>state.filterState,shallowEqual);


useEffect(()=>{
  console.log("map rerenders in redux change");
});    
     
    return (
        <>
        {/* <NavbarH></NavbarH> */}
        <ProminentAppBar/>
        <SearchBar></SearchBar>
        <h1>{filterState.salary}</h1>
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="End"
          labelPlacement="end"
          style={{display:'flex',justifyContent:'center'}}
          
     
        />
       <div className="container">
        {/* <Filter></Filter> */}

        <QueryClientProvider client={queryClient}>
      <Map />
    </QueryClientProvider>
     </div>
     <Footer></Footer>

        </>
    )
}




export {Main}