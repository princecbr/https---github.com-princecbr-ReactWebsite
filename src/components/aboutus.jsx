import React, { useEffect, useState } from "react";
import { Card, CardImg, Col, Container, Row, TabContainer } from "react-bootstrap";
import Bootstrap from "./boostrap";
import { useParams } from "react-router-dom";
function About(){
  const { empid } = useParams();
  console.log("empid",empid);

    const [empdata, empdatachange] = useState({});
    console.log(empdata);
    useEffect(() => {
      fetch("http://localhost:3000/employee/" + empid).then((res) => {
          return res.json();
      }).then((resp) => {
          empdatachange(resp);
      }).catch((err) => {
          console.log(err.message);
      })
  }, []);

    return(
        <>
        <Bootstrap/>
      <Container>
        <Row>
        <Card>
          <Col  p-1 bg-primary>
          <CardImg src="https://thumbs.dreamstime.com/z/businessman-profile-cartoon-beard-vector-illustration-graphic-design-135443491.jpg"/>
        
         
          {empdata &&
                    <div>
                        <h2>empdata.name ({empdata.id})</h2>
                        <h3>Contact Details</h3>
                        <h5>Email is : {empdata.email}</h5>
                        <h5>Phone is : {empdata.phone}</h5>
                        {/* <Link className="btn btn-danger" to="/">Back to Listing</Link> */}
                    </div>
                }
        
         </Col>
        </Card>
        </Row>
       
      </Container>
      </>
    )
}
export default About;