import Cookies from 'js-cookie';
import jwt from 'jwt-decode';

const isAuth = () => {
  //const user = jwt( Cookies.get('jwtoken'));
  //console.log(user); 
  return Cookies.get('jwtoken');

  };
  
  export const userType = () => {
    return localStorage.getItem("type");
  };
  
  export default isAuth;
  