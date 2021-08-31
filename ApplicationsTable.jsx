import React,{useState} from "react";
import DataJson from "../data.json";
import {Link} from 'react-router-dom';

function ApplicationTable(){

        const [posts]=useState(DataJson);
        const [appsPerPage,setAppsPerPage]=useState(5);
        const [currentPage,setCurrentPage]=useState(1);
        const [requiredApp,setRequiredApp]=React.useState("");

        const [searchTerm,setSearchTerm]=React.useState("");

        const [pageNumberLimit,setPageNumberLimit]=useState(3);

        const [maxPageNumberLimit,setMaxPageNumberLimit]=useState(3);
        const [minPageNumberLimit,setMinPageNumberLimit]=useState(0);

        const pages =[];

        for(let i=1;i<=Math.ceil(posts.length/appsPerPage);i++){
                pages.push(i);
        }
        
        function handlePageClick(event){
                setCurrentPage(event.target.id);

        }

        const renderPageNumbers = pages.map((number) =>{
               if(number<maxPageNumberLimit+1 && number >minPageNumberLimit){
                return (
                        <li key={number} id={number} onClick={handlePageClick}
                        className={currentPage==number ?"active":null}>
                        {number}
                        </li>
                        );
               }
               else{
                       return null;
               }
        });

        const indexOfLastApp=currentPage*appsPerPage;
        const indexOfFirstApp=indexOfLastApp-appsPerPage;

        const currentApps =posts.slice(indexOfFirstApp,indexOfLastApp);

        let pageIncrementBtn=null;
        if(pages.length > maxPageNumberLimit){
                pageIncrementBtn=<li onClick={handleNxtBtn}> &hellip;</li>
        }
        let pageDecrementBtn=null;
        if(pages.length > maxPageNumberLimit){
                pageDecrementBtn=<li onClick={handlePrevBtn}> &hellip;</li>
        }
        
        const wholeTable = (data) =>{
                return (
                        <div className="container">
                        <table className="table table-striped table-bordered">
                                <thead>
                                      <tr>
                                        <th>id</th>
                                        <th>Application Code</th>
                                        <th>Application Name</th>
                                        <th>Application Description</th>
                                        <th>actions</th>
                                        </tr>
                                </thead>
                                <tbody>
                                {/* {data.map((app,index) =>(
                                        <tr key={index}>
                                                <td>{app.id}</td>
                                                <td>{app.ApplicationCode}</td>
                                                <td>{app.ApplicationName}</td>
                                                <td>{app.ApplicationDescription}</td>
                                        </tr>
                                ))} */}
                                
                                        {data.filter(value => {
                                                if(searchTerm === "")
                                                { return value}
                                                else if(value["ApplicationCode"].toLowerCase().includes(searchTerm.toLowerCase())){
                                                        return value;
                                                }
                                        }).map((val,key) => {
                                                return (<tr key={key}>
                                                        <td>
                                                               {val["id"]}
                                                        </td>
                                                        <td>
                                                               { val["ApplicationCode"]}
                                                        </td>
                                                        <td>
                                                                {val["ApplicationName"]}
                                                        </td>
                                                        <td>
                                                                {val["ApplicationDescription"]}
                                                        </td>
                                                </tr>)
                                        })
                                        }
                                 </tbody>
                                       
                         </table>
        
                 </div>

                        
                )
        }
        const handleNxtBtn = () =>{
                setCurrentPage(currentPage+1);
                if(currentPage+1 > maxPageNumberLimit){
                        setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
                        setMinPageNumberLimit(minPageNumberLimit+pageNumberLimit);
                }
        }
        const handlePrevBtn = () =>{
                setCurrentPage(currentPage-1);
                if((currentPage-1)%pageNumberLimit==0 ){
                        setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit);
                        setMinPageNumberLimit(minPageNumberLimit-pageNumberLimit);
                }
                
        };

       
        return(
         <div>
                <div className="container">
                        <div className="list-item">
                        <lable>Search</lable>
                        <br />
                        <input type="text" 
                        id="myinput" 
                        placeholder="search"
                         title="type in a name"
                          onChange={(event) =>{setSearchTerm(event.target.value);
                          }} 

                         />
                         </div>
                         <div className="list-item">
                                <lable>Select</lable>
                                <br />
                         <select 
                         onClick={(e) =>{
                                 const selectedApp=e.target.value;
                                 setRequiredApp(selectedApp);
                         }}
                         >
                                <option value=""  selected>choose the appcode</option>
                                <option value="IS01"  >IS01</option>
                                <option value="FO01">FO01</option>
                         </select>

                         </div>
                         <div className="list-item">
                         <Link to="/createapp">
                         <button type="button" className="btn btn-secondary">create Application</button>
                         </Link>
                         </div>
                </div>
                <br />
                {wholeTable(currentApps)}
                <br />
                <ul className="pageNumbers justify-content-center">
                        <li>
                                <button onClick={handlePrevBtn}>prev</button>
                        </li>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                        <li>
                                <button onClick={handleNxtBtn}>next</button>
                        </li>
                        </ul>
                
             
         </div>
        );
}

export default ApplicationTable;