import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavbarBrand, NavLink,Card,CardImg,Form,FormControl,FormGroup,FormLabel,Button, Alert } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import SignUpForm from "./signupform";
function Loginboot(){

    const navigate= useNavigate();
    const[name,setname]=useState("");
    const[password,setpassword]=useState("");
    const[profiledetails,setprofiledetails]=useState("");
    // const boot=()=>{
        
    //     navigate('/Home')

    
    const namechange=(e)=>{
        setname(e.target.value);
    }
    const passwordchange=(e)=>{
        setpassword(e.target.value);
    }
    

    
    
    useEffect(() => {
        fetch("http://localhost:3000/profile").then((res) => {
            return res.json();
        }).then((resp) => {
            setprofiledetails(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    const handlesubmit=()=>{
        const user=profiledetails.find((e)=>e.firstname===name)
        if(user){
            if(user.password === password){
                navigate('/Home')
            }
            else{
                alert("check your password")
            }
            

            
        }else {
            alert("check your username&password")
        }
    }

      const handlesign=()=>{
        console.log("Welcome");
        
        navigate("/signUp")
           
            
            
        
      }   


    
return(
    <>
    <h1></h1>



   
    
    <Container fluid bg='primary'>
    <Card className='my-2' style={{maxWidth:"100%"}}>
    <CardImg src ="https://styleandsociety.com/wp-content/uploads/2016/12/Zermatt-village-1024x661.jpg"></CardImg>
     <h1 style={{textAlign:'center'}}>Welcome <br/> Have a Great Day!</h1>
     <Card bg='secondary'style={{maxWidth:"30%",boxShadow:'initial'}}>
        <h1 style={{textAlign:'center'}}>Login Form</h1> 
        <Form className='my-6'>
            <FormGroup> 

            <FormLabel id='username'>Username</FormLabel>
            <FormControl onChange={namechange} type="text" placeholder='Enter your name' required></FormControl>
            </FormGroup>
            <FormGroup>
            <FormLabel id='Password' >Password</FormLabel> 
            <FormControl onChange={passwordchange} type="text" placeholder='Enter your Password'required></FormControl>
            </FormGroup> 
            <Button type='submit'onClick={handlesubmit}>Login</Button>
            
    </Form>
     </Card>
        <p>If you're new. signup? <Button type="submit" onClick={handlesign}>Signup</Button></p>
      </Card>
      </Container> 








    </>
)
}
export default Loginboot;