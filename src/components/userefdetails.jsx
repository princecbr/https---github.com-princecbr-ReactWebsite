import { computeHeadingLevel } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Button, Form, FormCheck, FormLabel, Modal, ModalHeader, ModalTitle } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { Link, useNavigate } from "react-router-dom";


const UseRef = () => {const [show, setShow] = useState(false);
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
   

    const handleeditClose=()=>setedit(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handledetailsClose =()=>setdetails(false);
    const handledetails=(id)=>{
      setdetails(true);
      fetch("http://localhost:3000/employee/" + id).then((res) => {
        return res.json();
    }).then((resp) => {
      console.log(resp)
        empdetailsshow(resp);
    }).catch((err) => {
        console.log(err.message);
    })
    
    }
    const handleedit=(id)=>{
        setedit(true);
        fetch("http://localhost:3000/employee/" + id).then((res) => {
          return res.json();
      }).then((resp) => {
        console.log(resp)
        eidchange(resp.id)
        editemailchange(resp.email)
        editnamechange(resp.name)
        editphonechange(resp.phone)
          empeditchange(resp);
      }).catch((err) => {
          console.log(err.message);
      })
    }
    
    

    
    
    const navigate = useNavigate();

    const LoadDetail = (id) => {
      console.log("id",id);
      
     
        navigate("/employee/"+id );
     }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      const empdata={name,email,phone};
      


      fetch("http://localhost:3000/employee",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        window.location.reload();
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    const handleeditSubmit=(e)=>{
      e.preventDefault();
      const empdata={name:ename,email:eemail,phone:ephone};
      console.log("empdata",empdata);
      

      fetch("http://localhost:3000/employee/"+ eid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        console.log("res",res);
        alert('Saved successfully.')
        window.location.reload();
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    const handledetailsSubmit=(id)=>{
      fetch("http://localhost:3000/employee/" + id).then((res) => {
        return res.json();
    }).then((resp) => {
      console.log(resp)
        empdetailsshow(resp);
    }).catch((err) => {
        console.log(err.message);
    })

      
    }
    
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3000/employee/" + id, {
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
        fetch("http://localhost:3000/employee").then((res) => {
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
                        <Button style={{margin:"34px",padding:"5px"}} onClick={handleShow} bg='primary'>Add User</Button>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a onClick={() => { handleedit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { handledetails(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="id"
                placeholder="enter id"
                autoFocus value={id} disabled="disabled"className="form-control"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control value={name} onMouseDown={e=>valchange(true)}onChange={e=>namechange(e.target.value)} className="form-control" />
              {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                autoFocus value={email} onChange={e=>emailchange(e.target.value)} className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="no"
                placeholder="enter no"
                autoFocus
                value={phone} onChange={e=>phonechange(e.target.value)} className="form-control" />
            </Form.Group>
          </Form>
        
        </Modal.Body>
        <Modal.Footer>
      
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>  




     {/* Details Modal PopUp */}
      <Modal show={details} onHide={handledetailsClose}>
        <Modal.Header closeButton>
          <Modal.Title> User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {empdetails &&
                    <div>
                        <h2>empdetails.name ({empdetails.id})</h2>
                        
                        <h5>Email is : {empdetails.email}</h5>
                        <h5>Phone is : {empdetails.phone}</h5>
                        {/* <Link className="btn btn-danger" to="/">Back to Listing</Link> */}
                    </div>
                }
        </Modal.Body>
        <Modal.Footer>
      
          <Button variant="secondary" onClick={handledetailsClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handledetailsSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>  






      {/* Edit */}
      <Modal show={edit} onHide={handleeditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="id"
                placeholder="enter id"
                autoFocus value={eid} disabled="disabled" className="form-control"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control value={ename} name="name" onMouseDown={e=>valchange(true)}onChange={e=>editnamechange(e.target.value)} className="form-control" />
              {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                autoFocus value={eemail} name="email" onChange={e=>editemailchange(e.target.value)} className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="no"
                placeholder="enter no"
                autoFocus
                value={ephone} name="phone"  onChange={e=>editphonechange(e.target.value)} className="form-control" />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
      
          <Button variant="secondary" onClick={handleeditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleeditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>  
     
                </div>
            </div>
        </div>
        
    );
}

export default UseRef;