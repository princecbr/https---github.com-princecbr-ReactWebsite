import React from "react";
import { Button, Card, CardImg, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import Bootstrap from "./boostrap";
function Servicepage(){


    return(
        <>
        <Bootstrap/>
        <h1>Welcome</h1>
        <Container>
     
                <Card className="my-2 mx-5 "style={{maxWidth:'100%',paddingLeft:'50px',paddingRight:'60px',}}>
             <Row>
           <Card className="my-2 mx-5" class="col-6" style={{maxWidth:'20%',paddingLeft:'20px',paddingRight:'20px'}}>
            <CardImg style={{height:'300px',width:'100%'}} src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=582&w=398"></CardImg>
            <h2 style={{textAlign:"center"}}>card1</h2>
            
            <Form>
                
                <FormGroup>
                    <FormLabel id='specific'>unique ways of scrutinizing about the product and client oriented services.</FormLabel>
                    
                </FormGroup>
                <FormGroup>
                    <FormLabel id='waranty'> 1 year free services.</FormLabel>
                    <br/>
                    <Button type="text" bg='Dark'>Submit</Button>
                </FormGroup>
                 
            </Form>


           
            </Card> 
            
            <Card  className="my-2 mx-5" style={{maxWidth:'20%'}}>
            <CardImg style={{height:'300px',width:'100%'}}src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=582&w=398"></CardImg>
            <h2 style={{textAlign:"center"}}>card2</h2>
            
            <Form>
                
                <FormGroup>
                    <FormLabel id='specific'>unique ways of scrutinizing about the product and client oriented services.</FormLabel>
                  
                </FormGroup>
                <FormGroup>
                    <FormLabel id='waranty'> 1 year free services.</FormLabel>
                     <br/>
                    <Button type="text" bg='Dark'>Submit</Button>
                </FormGroup>
                
            </Form>


           
            </Card> 
            <Card className="my-2 mx-5" style={{maxWidth:'20%'}}>
            <CardImg style={{height:'300px',width:'100%'}}src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=582&w=398"></CardImg>
            <h2 style={{textAlign:"center"}}>card3</h2>
            
            <Form>
                
                <FormGroup>
                    <FormLabel id='specific'>unique ways of scrutinizing about the product and client oriented services.</FormLabel>
                    
                </FormGroup>
                <FormGroup>
                    <FormLabel id='waranty'> 1 year free services.</FormLabel>
                    <br/>
                    <Button type="text" bg='Dark'>Submit</Button>
                </FormGroup>
                
            </Form>


           
            </Card> 
            <Card className="my-1 mx-5" style={{maxWidth:'20%'}}>
            <CardImg style={{height:'300px',width:'100%'}}src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=582&w=398"></CardImg>
            <h2 style={{textAlign:"center"}}>card4</h2>
            
            <Form>
                
                <FormGroup>
                    <FormLabel id='specific'>unique ways of scrutinizing about the product and client oriented services.</FormLabel>
                   
                </FormGroup>
                <FormGroup>
                    <FormLabel id='waranty'> 1 year free services.</FormLabel>
                   <br/>
                    <Button type="text" bg='Dark'>Submit</Button>
                </FormGroup>
                
            </Form>


           
            </Card> 
           
           </Row>
            </Card> 
        
            
        </Container>
        </>
    )

}
export default Servicepage;