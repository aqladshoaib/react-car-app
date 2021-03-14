
import './App.css';
import {ViewCar} from './pages/view-cars/ViewCar'
import {CarDetails} from './pages/car-details/CarDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <div className="header">Cars</div>
   
    <Router>
      <div className="centerbody">
     

      

      
        <Switch>
          <Route exact path="/">
          <ViewCar />
          </Route>
          <Route path="/car-detail/:carname">
           <CarDetails />
          </Route>
          
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
