import react from "react";
// import App from "./Map/App";
import NavbarH from "./NavbarH";
import Filter from "./FilterBar";
import 'leaflet/dist/leaflet.css';
import ProminentAppBar from "./NavbarH";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Map from "./Map/Map";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const Main= ()=>{




    
     
    return (
        <>
        {/* <NavbarH></NavbarH> */}
        <ProminentAppBar/>
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="End"
          labelPlacement="end"
          
     
        />
       
        <Filter></Filter>
        <QueryClientProvider client={queryClient}>
      <Map />
    </QueryClientProvider>
        {/* <div className="google-map-code">
        
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="80%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div> */}

        </>
    )
}




export {Main}