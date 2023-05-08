import React from "react";
import {  Tab, Tabs } from "react-bootstrap";
import Bootstrap from "./boostrap";
import Loginuser from "./userdetails";
import Profile from "./userprodetails";
import UseRef from "./userefdetails";

function Admin(){

return(
    <>
     <Bootstrap/>
        
        <Tabs defaultActiveKey='userref'>
        <Tab eventKey='userdet' title="User Details">
         <Loginuser/>   
        </Tab>
        <Tab eventKey='userpro' title="User profile Details">
        <Profile/>
        </Tab>
        <Tab eventKey='userref' title="User ref Details">
         <UseRef/>   
        </Tab>
         
    </Tabs>
      
    
    
    </>
)


}
export default Admin;