import { computeHeadingLevel } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Button, Form, FormCheck, FormLabel, Modal, ModalHeader, ModalTitle } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { Link, useNavigate } from "react-router-dom";


const Profile = () => {const [show, setShow] = useState(false);
    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[ename,editnamechange]=useState("");
    const[eemail,editemailchange]=useState("");
    const[ephone,editphonechange]=useState("");
    const[eid,eidchange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);
    const[details,setdetails]=useState(false);
    const[edit,setedit]=useState(false);
    const [empdata, empdatachange] = useState(null);
    const [empdetails, empdetailsshow] = useState(null);
    const[empedit,empeditchange]=useState(null);
   

    
   
    

    
    

    
    
    
    
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3000/profile/" + id, {
                method: "DELETE"
            }).then((res) => {
              
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:3000/profile").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        
        <div className="container">
           
            <div className="card">
                <div className="card-title">
                    <h2>User Reference Detail</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        {/* <Link to="employee/create" className="btn btn-success">Add New (+)</Link> */}
                       
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr> 
                                <td>Id</td>
                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>Email</td>
                                <td>Password</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                         <td>{item.id}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                    
     
                </div>
            </div>
        </div>
        
    );
}

export default Profile;