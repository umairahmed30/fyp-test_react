import logo from './logo.svg';
import { Form } from './components/Form';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import { Route, Switch } from "react-router-dom"; 

import './App.css';
import Recommendation from './components/Recommendation';

const Routing = () => {
  
  return (
    <>
       <Switch>
      <Route exact path="/">
        <Form />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/signin">
        <SignIn/>
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
