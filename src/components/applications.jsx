// import React from "react";
// import {Link} from 'react-router-dom';
// import CreateApplicationTable from "./cerateApplicationTable";
// function Application(){

//         const handleSearch = (event) => {

//         }
//         return(
//                 <div className="container" >
//                         <h5 className="list-head">List of Applications</h5>
//                         <div className="labelling">
//                         <div className="sort-list">
//                         <lable>search :</lable><br/> 
//                         <input className="list-item" type="text" placeholder="search"
//                          title="search" onChange={handleSearch} />
//                         </div>
//                         <div  className="sort-list">
//                         <lable>sort :</lable> <br />
//                         <select className="list-item">
//                                 <option value="old to new" selected>old to new</option>
//                                 <option value="B.new to old">new to old</option>
//                          </select>
//                          </div>
//                          <div  className="sort-list">
//                          <lable>App code :</lable> 
//                          <br/>
//                         <select className="list-item">
//                                 <option value="All" selected>All</option>
//                                 <option value="IS01">IS01</option> 
//                                 <option value="FS01">FS01</option>       
//                          </select>
//                          </div>
//                          <div className="sort-list">
//                                  <Link to='/createApp'>
//                                         <button type="button">Create Application</button>
//                                  </Link>
//                          </div>
//                          <div className="sort-list">
//                                  <button type="button">Delete Application</button>
//                          </div>
                        
//                         </div>
//                         <br/>
                        
//                           <CreateApplicationTable />                                
                                              
                          
//                 </div>
//         );
// }
// export default Application;