import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import ListApp from "./components/list";
ReactDOM.render(<div>
    <Navbar />  
    <Dashboard />  
    <ListApp />

</div>,
document.getElementById("root"));
