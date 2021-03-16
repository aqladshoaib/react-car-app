
import './App.css';
import {ViewCar} from './pages/view-cars/ViewCar'
import {AvailableCars} from './pages/available-cars/AvailableCars'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
    <div className="header">Car</div>
   
    <Router>
      <div className="centerbody">
     

      

      
        <Switch>
          <Route exact path="/">
          <ViewCar />
          </Route>
          <Route path="/available-cars/:carname">
           <AvailableCars />
          </Route>
          
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
