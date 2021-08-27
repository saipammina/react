import { IconButton } from "@material-ui/core";
import React, { useEffect } from "react";
import ApplicationService from "../services/ApplicationService";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {Link} from 'react-router-dom';
function CreateApplicationTable(){

        const [app,setApp]=React.useState([]);
        const [searchTerm,setSearchTerm]=React.useState("");

        useEffect(() =>{
                getAppl();
        } ,[])
        const getAppl = () =>{
                ApplicationService.getApplications().then((response) =>{
                        setApp(response.data)
                        
                });
        };

        return (
                <div>
                <div className="container">
                        <div className="sort-list">
                        <lable>search :</lable><br/> 
                                <input className="list-item" type="text" placeholder="search"
                                 title="search" onChange={(event) =>{setSearchTerm(event.target.value);
                         }} />
                        </div>
                        <div className="sort-list">
                                 <Link to='/createApp'>
                                        <button type="button">Create Application</button>
                                 </Link>
                         </div>
                         <div className="sort-list">
                                 <button type="button">Delete Application</button>
                         </div>

                </div>
                <br />
                
                <div className="container">
                <h2 className="text-center">List of applications</h2>
                <br />
                <table className="table table-striped">
                        <thead>
                                <tr>
                                        <th>Application id</th>
                                        <th>Application Code</th>
                                        <th>Application name</th>
                                        <th>Application description</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                </tr>
                        </thead>
                        {/* <tbody>
                                {
                                        app.map( apps => 
                                        <tr key={apps.id}>
                                                <td> {apps.id}</td>
                                                <td> {apps.code}</td>
                                                <td> {apps.name}</td>
                                                <td> {apps.description}</td>
                                                <td><IconButton><EditIcon /></IconButton></td>
                                                <td><IconButton><DeleteIcon /></IconButton></td>
                                         </tr>
                                        )
                                }
                        </tbody> */}
                        <tbody>
                                        {app.filter(value => {
                                                if(searchTerm === "")
                                                { return value}
                                                else if(value["code"].toLowerCase().includes(searchTerm.toLowerCase())){
                                                        return value;
                                                }
                                        }).map((val,key) => {
                                                return (<tr key={key}>
                                                        <td>
                                                               {val["id"]}
                                                        </td>
                                                        <td>
                                                               { val["code"]}
                                                        </td>
                                                        <td>
                                                                {val["name"]}
                                                        </td>
                                                        <td>
                                                                {val["description"]}
                                                        </td>
                                                        <td><IconButton><EditIcon  /></IconButton></td>
                                                        <td><IconButton><DeleteIcon /></IconButton></td>
                                                </tr>)
                                        })
                                        }
                                </tbody>

                </table>

                </div>
                </div>
        );
}
export default CreateApplicationTable;