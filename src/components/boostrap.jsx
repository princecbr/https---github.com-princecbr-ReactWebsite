import react from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavLink,Card,CardImg,Form,FormControl,FormGroup,FormLabel,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import About from './aboutus'
import Loginboot from './loginbootstrap'
function Bootstrap(){
    const navigate=useNavigate()
const logout=()=>{
   navigate ('/')
}

 return(
    <>
       
    <Navbar bg='dark' variant='dark'>
        <Container>
        <NavbarBrand href="Home">JOHN PLAYERS</NavbarBrand>
        <Nav>
        <NavLink href="Home">HOME</NavLink>
        <NavLink href="Services">Services</NavLink>
        <NavLink href="Aboutus">Aboutus</NavLink>
        <NavLink href="Contactus">Contact us</NavLink>
        <NavLink href="AdminDashboard">AdminDashboard</NavLink>
        <NavLink href="Redux">Redux</NavLink>
      
        <Button onClick={logout}bg='primary'>Logout</Button>
           
        </Nav>
        </Container>
    </Navbar>
    {/* <h1>Design</h1>
    <Container fluid bg='primary'>
    <Card className='my-2' style={{maxWidth:"50%"}}>
    <CardImg src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"></CardImg>
     <h1 style={{textAlign:'center'}}>Welcome to Edinbhurg</h1>
     <Card bg='secondary'style={{maxWidth:"50%",boxShadow:'initial'}}>
        <h1 style={{textAlign:'center'}}>Login Form</h1> 
        <Form className='my-6'>
            <FormGroup> 

            <FormLabel id='username'>Username</FormLabel>
            <FormControl type="text" placeholder='Enter your name'></FormControl>
            </FormGroup>
            <FormGroup>
            <FormLabel id='Password'>Password</FormLabel> 
            <FormControl type="text" placeholder='Enter your Password'></FormControl>
            </FormGroup> 
            <Button type='click'>Login</Button> */}
    {/* </Form>
     </Card>
      </Card>
    //   </Container>  */}
    </> 
 )     
}
export default Bootstrap