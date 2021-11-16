import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import { AiOutlineHome} from 'react-icons/ai';
import{RiLogoutBoxRLine} from 'react-icons/ri';
import {IoIosLogOut} from 'react-icons/io';
import {MdLogout} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import {FiHome} from 'react-icons/fi';

import { useHistory } from "react-router-dom";
import logo from "../Logo/logo_white.png";
import Image from "material-ui-image";

//import isAuth, { userType } from "../lib/isAuth";

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

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" >
       {/* <Toolbar>
        <img src="transparent.png" alt="logo" className={classes.logo} />
      </Toolbar> */}
      <Toolbar color="DC1A22">
        
        <Typography  variant="h6" className={classes.title}>
          <img src={logo} alt="logo" className="w-25"/>
        </Typography>
        {/* {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : ( */}
            <>
            <Stack spacing={2} direction="row">
             
              <Button color="inherit" onClick={() => handleClick("/home")}>
                <FiHome  size={28}></FiHome>
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                <CgProfile size={28}></CgProfile>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                <MdLogout size={28}></MdLogout>
              </Button>
              </Stack>
            </>
          {/* )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )} */}
      </Toolbar>
    </AppBar>
    
  );
};

export default Navbar;
