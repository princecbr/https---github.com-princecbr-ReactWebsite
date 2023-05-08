import React from "react";
import { Carousel, Row, Container, CardImg, Card, Button } from "react-bootstrap";
import Bootstrap from "./boostrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Homepage(){

  const navigate = useNavigate();
  const handlesubmit=()=> {
    navigate("AdminDashboard/");
}

    return(
        <>
   <Bootstrap/>
     <Carousel>
        <Carousel.Item>
            <img style={{maxHeight:"95vh"}}
             className="d-block w-100"
              src="https://media.credencys.com/wp-content/uploads/2019/08/what-is-react-js.jpg"/>
          <Carousel.Caption>
            <h3>React JS</h3>
            <p>User Friendly</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{maxHeight:"95vh"}}
             className="d-block w-100"
             src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/JLiTiP1RsiGJxMPp8bIQ"/>
          <Carousel.Caption>
            <h3>React JS</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{maxHeight:"95vh"}}
             className="d-block w-100"
             src="https://mochikit.com/wp-content/uploads/2019/01/react-js.jpg"/>
          <Carousel.Caption>
            <h3>React JS</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

       <Container>
        <h1 style={{textAlign:'center'}} >About us</h1>
        <p> 
        React lets you build user interfaces out of individual pieces called components.
         Create your own React components like Thumbnail, LikeButton, and Video. Then 
         combine them into entire screens, pages, and apps.
        </p>
       </Container>
       <br/>
       <Container>
        <h1 style={{textAlign:"center"}}> Services</h1>
        <Row>
        <Card   className="my-2 mx-4" style={{maxWidth:'35%'}}>
          <CardImg style={{maxHeight:'200px'}}src="https://th.bing.com/th/id/OIP.KRhG2XQaVTBM1_LDqis1MgHaDt?pid=ImgDet&rs=1"/>
          <h1>CRUD </h1>
          <p>
          CRUD stands for Create, Read, Update, and Delete. In ReactJS everything is aligned in a form of a component and every component has its own way and feature to do so.
           React js is one of the most used JavaScript libraries for frontend development. It's very important to have the basic functionality of CRUD operations in with react-js.
          </p>
          {/* <Link className="btn btn-danger" onSubmit={handlesubmit}to="/AdminDashboard">Back to Listing</Link> */}

        </Card>
       
       <br/>
       
        
        <Card className="my-2 mx-4" style={{maxWidth:'35%'}}>
        <CardImg style={{maxHeight:'170px'}}src="https://liyaodong.com/react-redux-session/react-redux-logo.jpg"/><br/>
          <h1>REDUX</h1>
          <p>
          React Redux is maintained by the Redux team, and kept up-to-date with the latest APIs from Redux and ReactDesigned to work with React's component model.
          You define how to extract the values your component needs from Redux, and your component updates automatically as needed.
          </p>


        </Card>
        <br/>
       
        
        
        </Row>
       </Container>
       
       </>
        )
}
export default Homepage;