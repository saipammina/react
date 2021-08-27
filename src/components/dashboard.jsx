import React from "react";
import {Link} from 'react-router-dom';

function Dashboard(){
        
        return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                        <ul className="navbar-nav dash">
                        <li className="nav-item">
                                <a className="nav-link" href="">Dashboard</a>
                        </li>
                        <Link className="underl" to='/applications'>
                        <li className="nav-item">
                                <a className="nav-link" href="" >Application</a>
                        </li>
                        </Link>
                        <li className="nav-item">
                                <a className="nav-link" href="">Group</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" href="">User</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" href="">Field</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" href="">FileKey</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" href="">Profile</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" href="">Screen</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" href="">Reports</a>
                        </li>


                        </ul>



                </nav>
        );
        
}
export default Dashboard;