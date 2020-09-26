import React, { Component } from "react";
import { MDBIcon,MDBInput } from "mdbreact";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBNavLink, MDBCardBody} from 'mdbreact';

import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

class NavbarPage extends Component {
  constructor(){

    super()
    this.state = {
      name:'',
      email:'',
      subject:'',
      message:'',      
      isOpen: false
    };
    
  }
  componentDidMount(){
    
  }


  mychange=e=>{
    this.setState({[e.target.id]:e.target.value})
  }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() 

{

  return (

    <Router>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="9" lg="7" className="mx-auto mt-5">
            <form>
              <p className="h5 text-center mb-4"><b>ADD-BLOG</b></p>
              <div className="black-text">
                <MDBInput
                id='name'
                value={this.state.name}
                onChange={e=>this.mychange(e)}
                label="Your name" 
                icon="user" 
                group type="text" 
                validate error="wrong"
                success="right" />
                <MDBInput 
                value={this.state.email}
                onChange={e=>this.mychange(e)}
                id='email'
                label="Your email" 
                icon="envelope" 
                group type="email" 
                validate error="wrong"
                success="right" />
                <MDBInput 
                value={this.state.subject}
                onChange={e=>this.mychange(e)}
                id='subject'
                label="Subject" 
                icon="tag" 
                group type="text" 
                validate error="wrong" 
                success="right" />
                <MDBInput 
                value={this.state.message}
                onChange={e=>this.mychange(e)}
                id='message'
                type="textarea" 
                rows="2" 
                label="Your message" 
                icon="pencil-alt" />
              </div>
              <div className="text-center">
              <MDBBtn color="white" size="md" className="waves-light "  href="/home">
                Back
                  <MDBIcon icon="chevron-circle-left" className="ml-1" />
                </MDBBtn>
                <MDBBtn color="white" size="md" className="waves-light ">
                  Post
                  <MDBIcon icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Router>
    );
}
}


export default NavbarPage;  