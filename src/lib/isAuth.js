import Cookies from 'js-cookie';

const isAuth = () => {
return Cookies.get('jwtoken')

  };
  
  export const userType = () => {
    return localStorage.getItem("type");
  };
  
  export default isAuth;
  