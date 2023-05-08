import React, { useState } from "react";

function LoginForm(){
    const [userName,setUserName]=useState("")
    const[UserPassword,setUserPassword]=useState("")
    const[isPassed,setisPassed]=useState(false)
    const[isbegin,setisbegin]=useState(true)
    const[isSign,setisSign]=useState(false)
    const[isHidden,setisHidden]=useState(true)

    const loginstyle ={
        boxShadow : '1px 2px 2px red',
        padding:'2em',
        margin:'4em'
    }
    const nameChangeForm=(e)=>{
        console.log("event",e.target.value)
        setUserName(e.target.value)
    }
    const passwordChangeForm=(e)=>{
        console.log("event",e.target.value)
        setUserPassword(e.target.value)
    }
    const click=()=>{
        setisPassed(true)
    setisbegin(false)
    setisSign(false)
    }
    const SignInClick=()=>{
    alert("User Registered Successfully ");
    setisPassed(false)
    setisbegin(true)
    setisSign(false)
    }
    const backSubmit=()=>{
        alert("Are you Sure you want to go back ");
        setisPassed(false)
        setisbegin(true)
        setisSign(false)
    }
    const refresh=()=>{
        
       setisPassed(false)
       setisbegin(false)
       setisSign(true)
        
    }
   

    const loginFormStructure =(
        <div style={loginstyle}>
         
            <form onSubmit={click}>
            <p>USERLOGIN</p>
                <lable>
                    username
                </lable>
                <br/>
                <input type="text" name="uname" required onChange={nameChangeForm}></input>
                <br/>
                <label>
                    Password
                </label>
                <br/>
                <input type="Password" name="upassword" required onChange={passwordChangeForm}></input>
                <br/>
                <button type="submit">Login</button>
            </form>
            <p>New user Register Here</p> <button onClick={refresh}>SignIn</button>
            
            
        </div>
    )
    const signUpFormStructure =(
        <div style={loginstyle} >
            <form onSubmit={SignInClick}>
                <label>FirstName</label>
                <br/>
                <input type ='text' name='fName' required ></input>
                <br/>
                <label>LastName</label>
                <br/>
                <input type='text' name='lname' required ></input>
                <br/>
                <label>email</label>
                <br/>
                <input id ='mail' ename ='mailid' required ></input>
                <br/>
                <label>Password</label>
                <br/>
                <input type ='password' password='spassword' required ></input>
                <br/>
                <button type ='submit' >submit</button>
                <br/>

            </form>
        </div>
    )
    return(
        <div >
           
           {isPassed ? <div> {userName} is successfully Logged in <button type="submit" onClick={backSubmit}>Back to Login</button> </div> :loginFormStructure}
           {/* {isPassed && <div> {userName} is successfully Logged in <button type="submit" onClick={backSubmit}>Back to Login</button> </div>}
           
           {isSign && signUpFormStructure} */}

        
         
        
        {/* {!isbegin ? <div> {userName} new User <button type="submit" >Back to sign</button> </div> :loginFormStructure} */}
        </div>
    )
    
}
export default LoginForm;