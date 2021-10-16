import logo from './logo.svg';
import { Form } from './components/Signup_Form/Form';
//import { Home } from './components/Home';
import {Home} from './components/Home';
import { SignIn } from './components/SignIn';
import { Route, Switch } from "react-router-dom"; 
import Navbar from './components/Navbar';
import { ThankYou } from './components/thankYou';
import './App.css';
import Recommendation from './components/Recomm_Form/Recommendation';

const Routing = () => {
  
  return (
    <>
       <Switch>
      <Route exact path="/">
        
        <Form />
      </Route>
      <Route  path="/home">
        <Navbar/>
        <Home />
      </Route>
      <Route exact path="/signin">
        <SignIn/>
      </Route>
      <Route exact path="/thankyou">
        <ThankYou/>
      </Route>
      <Route path="/recommendation/:email">
        <Recommendation/>
      </Route>

     

      
    </Switch>
    </>
  )
}

function App() {
  return (
  <Routing></Routing>
  );
}

export default App;
