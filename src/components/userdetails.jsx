import React from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";


function Loginuser(){

return (
    
    <>
    <div style={{margin:"20px",padding:"5px"}}>
    <input type='search' placeholder="search"></input>
   <Button style={{margin:"34px",padding:"5px"}} bg='primary'>Add User</Button>
   </div>
       
    <Table striped bordered ='primary'>
        <thead>
          <tr>
            <th>Name</th>
            <th>I'd</th>
            <th>Usercode</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
            <tr>     
            <td>prince</td>
            <td>yuyuyu</td>
            <td>prince08</td>
            <td><ButtonGroup><Button>Update</Button><Button>Delete</Button></ButtonGroup></td>
            </tr>
            <tr>
            <td>Alex</td>
            <td>siuiui</td>
            <td>Alex09</td>
            <td><ButtonGroup><Button>Update</Button><Button>Delete</Button></ButtonGroup></td>
            </tr>
            <tr>
            <td>ron</td>
            <td>rererere</td>
            <td>ron04</td>
            <td><ButtonGroup><Button>Update</Button><Button>Delete</Button></ButtonGroup></td>
            </tr>
        </tbody>




    </Table>



    </>
)


}
export default Loginuser;