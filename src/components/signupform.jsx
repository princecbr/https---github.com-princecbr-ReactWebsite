import React ,{useState}from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bootstrap from "./boostrap";
import { useNavigate } from "react-router-dom";
function SignUpForm(){
    const [firstname,setUserfName]=useState("")
    const [lastname,setUserlName]=useState("")
    const [email,setUsermailid]=useState("")
    const[password,setUserPassword]=useState("")
    const navigate = useNavigate();
    
    const signStyle = {

        boxShadow:' 5px 2px 4px grey',
        padding : '5em'
        
    }
    const fnameChangeForm=(e)=>{
        console.log("event",e.target.value)
        setUserfName(e.target.value)
    }
    const lnameChangeForm=(e)=>{
        console.log("event",e.target.value)
        setUserlName(e.target.value)
    }
    const passwordChangeForm=(e)=>{
        console.log("event",e.target.value)
        setUserPassword(e.target.value)
    }

    const idChangeForm=(e)=>{
        console.log("event",e.target.value)
        setUsermailid(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const empdata={firstname,lastname,email,password};
        
  
  
        fetch("http://localhost:3000/profile",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(empdata)
        }).then((res)=>{
          alert('Saved successfully.')
          navigate("/");
        }).catch((err)=>{
          console.log(err.message)
        })
  
      }
    const signStructure= (
        <div style={signStyle} >
            <form>
                <label>FirstName</label>
                <br/>
                <input value={firstname} type ='text' name='firstname' required onChange={fnameChangeForm}></input>
                <br/>
                <label>LastName</label>
                <br/>
                <input value={lastname} type='text' name='lastname' required onChange={lnameChangeForm}></input>
                <br/>
                <label>email</label>
                <br/>
                <input value={email} id ='mail' name ='email' required onChange={idChangeForm}></input>
                <br/>
                <label>Password</label>
                <br/>
                 <input value={password} type ='password' name='password' required onChange={passwordChangeForm}></input>
                <br/>
                <button type ='submit' onClick={handleSubmit}>submit</button>
                <br/>



            </form>
        </div> 
    )

    return(
        <div>
            <Bootstrap/>
            <h1>SignUp</h1>
            {signStructure}
      </div>

    )

    

}
export default SignUpForm