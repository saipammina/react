import React from "react";

import {useHistory} from "react-router-dom";
import ApplicationService from "../services/ApplicationService";

function CreateApplication(){
        let history=useHistory();

        const [appstate,setAppstate]=React.useState({
                code:'',
                name:'',
                description:''
        });
        function handleChange(event){
                const entered=event.target.value;
                const nameOfTheField=event.target.name;

                setAppstate(prev => {
                        if(nameOfTheField === "appcode")
                        {
                                return {
                                        code:entered,
                                        name:prev.name,
                                        description:prev.description
                                };
                        }else if(nameOfTheField === "appname")
                        {
                                return{
                                        code:prev.code,
                                        name:entered,
                                        description:prev.description
                                };
                        }else if(nameOfTheField==="appdescription")
                        {
                                return{
                                        code:prev.code,
                                        name:prev.name,
                                        description:entered
                                };
                        }
                })

        }

        function handleSuccessClick(event){
                event.preventDefault();
                let applic=appstate;
                console.log(applic);
                
                ApplicationService.createApplications(applic).then(res =>{
                        
                        history.push("/applications");
                })
        }
        function handleDangerClick(){
              history.push("/applications");
        }
        return (<div className="container">
                <h4>Create Application</h4>
                <form>
                <div className="app-items">
                <div className="app-items-list">
                        <lable>Application Code</lable>
                        <br/>
                        <input type="text" name="appcode" value={appstate.code} onChange={handleChange} />
                        </div>
                        <div className="app-items-list">
                        <lable>Application Name</lable>
                        <br/>
                        <input type="text" name="appname" value={appstate.name} onChange={handleChange} />
                        </div>
                        <br/>
                
                        <div className="app-items-list">
                                <lable>Application description : </lable>
                                <br/>
                                <textarea name="appdescription" rows="3" cols="100" value={appstate.description} onChange={handleChange}></textarea><br/>
                        </div>
                        <br/>
                        <div className="app-items-list">
                                <lable>Upload files (For multiple upload) </lable><br/>
                                <input type="file" multiple />
        
                                
                        </div>
                        <br/>
                        <div className="butt">
                        <button className="btn btn-success" onClick={handleSuccessClick}>save</button>
                        <button className="btn btn-danger" onClick={handleDangerClick}>cancle</button>
                        </div>
                        <br/>

                </div>
                </form>
        </div>);
}
export default CreateApplication;