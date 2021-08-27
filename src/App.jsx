import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";

import CreateApplicationTable from "./components/cerateApplicationTable";
import CreateApplication from "./components/createapplication"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App(){
return (
        <Router>
        <div>
                
                 <Navbar />
                <Dashboard />
                <Switch>
                <Route  path="/" exact component={Home}></Route>
                <Route path="/applications" component={CreateApplicationTable}></Route>
                <Route path="/createApp" component={CreateApplication}></Route>
                </Switch>
                 
        </div>
        </Router>
)
}
const Home = () => (
        <div>
                <h2 className="home">choose which link you want</h2>
        </div>
)
export default App;