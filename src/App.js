import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
//import Fi from './components/Fi';
//import Hookone from './Hookone';
import LoginM from './components/LoginM';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
//import Signone from './components/Signone';
//import TaskThree from './components/TaskThree';
// import Hello from './components/Hello';
// import FirstFunction from './components/FirstFunction';
// import FirstClass from './components/FirstClass';
// import FirstSetState from './components/FirstSetState';
//import Taskone from './components/Taskone';
//import Tasktwo from './components/Tasktwo'
//import Heman from './components/Heman'
function App() {
  return (
    <div >
        {/* <Hello/>
        <FirstFunction/>
        <FirstClass/>
        <FirstSetState/> */}
        {/* <Heman/> */}
        {/* <Tasktwo/> */}
        {/* <TaskThree/> */}
        {/* <Fi/> */}
        {/* <Hookone/> */}
        {/* <Login/>*/}
        <BrowserRouter>
        
         <Switch>
            <Route path="/" exact component={LoginM}></Route> 
            <Route path="/LoginPage" component={LoginPage}></Route>
           <Route path="/Signup"  component={Signup}></Route>
           {/* <Route path="/SignupPage" component={SignupPage}></Route> */}
           <Route path="/ForgotPassword" component={ForgotPassword}></Route>
         </Switch>
         </BrowserRouter>
        {/* <NavLink to="/Signup" variant="body2">
                Create an account
              </NavLink> */}
              {/* <LoginM/> */}
        {/* <Signone/> */}
        {/* <ForgotPassword/> */}
        {/* <Signup/> */}

    </div>
  );
}

export default App;
