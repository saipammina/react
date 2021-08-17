import React from "react";
import ListApp from "./list";
function Dashboard(){

        const [mouse,setMouse]=React.useState(false);
        
        function handleApp(){
              return <div>
                      <ListApp />
              </div>
        }
        function handleMouseOver(){
                setMouse(true);
                console.log(mouse);

        }
        function handleMouseOut(){
                setMouse(false);
                console.log(mouse);

        }
        return (
                <div className="dash" >
                    <h4 className="dash-board">Dashboard</h4> 

                    <h4 onClick={handleApp}
                     onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut} 
                      style={{ color: mouse ? "blue" : "black" }}
                      className="dash-board">Application</h4> 
                    <h4 className="dash-board">Group</h4> 
                    <h4 className="dash-board">User</h4> 
                    <h4 className="dash-board">User</h4> 
                    <h4 className="dash-board">Field</h4> 
                    <h4 className="dash-board">FileKey</h4> 
                    <h4 className="dash-board">Profile</h4> 
                    <h4 className="dash-board">Screen</h4> 
                    <h4 className="dash-board">Reports</h4> 
                </div>
        );
}
export default Dashboard;