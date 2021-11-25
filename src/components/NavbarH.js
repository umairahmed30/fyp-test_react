// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     makeStyles,
//     Avatar,
//   } from "@material-ui/core";
//   import Stack from '@mui/material/Stack';
//   //import Button from '@mui/material/Button';
//   import { AiOutlineHome} from 'react-icons/ai';
//   import{RiLogoutBoxRLine} from 'react-icons/ri';
//   import {IoIosLogOut} from 'react-icons/io';
//   import {MdLogout} from 'react-icons/md';
//   import {CgProfile} from 'react-icons/cg';
//   import {FiHome} from 'react-icons/fi';
  
//   import { useHistory } from "react-router-dom";
//   import logo from "../Logo/logo_white.png";
//   import Image from "material-ui-image";
  
//   //import isAuth, { userType } from "../lib/isAuth";
  
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));
  
//   const NavbarH = (props) => {
//     const classes = useStyles();
//     let history = useHistory();
  
//     const handleClick = (location) => {
//       console.log(location);
//       history.push(location);
//     };
  
//     return (
//         <>
        
//       <AppBar  >
//          {/* <Toolbar>
//           <img src="transparent.png" alt="logo" className={classes.logo} />
//         </Toolbar> */}
//         <Toolbar color="DC1A22">
        
//           <Typography  variant="h6" className={classes.title}>
//             <img src={logo} alt="logo" className="w-25"/>
//           </Typography>
          
//               <>
//                 <Button color="inherit" onClick={() => handleClick("/home")}>
//                   <FiHome  size={28}></FiHome>
//                 </Button>
//                 <Button
//                   color="inherit"
//                   onClick={() => handleClick("/applications")}
//                 >
//                   Applications
//                 </Button>
//                 <Button color="inherit" onClick={() => handleClick("/profile")}>
//                   <CgProfile size={28}></CgProfile>
//                 </Button>
//                 <Button color="inherit" onClick={() => handleClick("/logout")}>
//                   <MdLogout size={28}></MdLogout>
//                 </Button>
//                 <Stack spacing={2} direction="row">
//       <Button variant="text">Text</Button>
//       <Button variant="contained"  >Contained</Button>
//       <Button variant="outlined"  color="success">Outlined</Button>
//     </Stack>
//               </>
            
//         </Toolbar>
//       </AppBar>
          
//       </>
//     );
//   };
  
//   export default NavbarH;
  
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import logo from "../Logo/logo_white.png";
import {Button ,makeStyles} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from "react-router-dom";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './NavbarH.css'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params}  placeholder="Favorites" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];


const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function ProminentAppBar() {
 const history = useHistory();
    const classes = useStyles();
    const mystyle = {
      width:"210%",
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <StyledToolbar className="container">
        <Typography  variant="h6" className={classes.title}>
             <img src={logo} alt="logo" className="w-25-i mt-1 ms-1-i"/>
      </Typography>
      <Stack direction="row" spacing={2}>
        <button className="btn btn-success" style={{mystyle}}>Job Post</button>
       <button className="btn btn-light" onClick={()=>{history.push('/signin')}}>Sign IN</button>
       <button className="btn btn-light" onClick={()=>{history.push('/')}}>Register</button>
      
    </Stack>
 
    
         
        
        
        </StyledToolbar>
        {/* <CheckboxesTags></CheckboxesTags> */}
      </AppBar>
    </Box>
  );
}

 