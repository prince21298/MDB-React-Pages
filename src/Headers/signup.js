import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios'



export class signup extends Component {
  constructor(){
    super()
        this.state={
            name:"",
            email:"",
            password:""
        }
  }
  sendreq=(e)=>{
    const {name,email,password}=this.state

    const obj={
        "name":name,
        "email":email,
        "password":password
    }
    if(email.includes('@')){
        if(password.length>6){
        axios.post('http://localhost:3050/signup',obj).then(result=>{
            console.log(result)
        }).catch(err=>{
            console.log(err)
        })
            
        }
    }
}

  mychange=e=>{
    this.setState({[e.target.id]:e.target.value})
  }

  
    render() {
        return (
            <MDBContainer>
              <MDBRow>
                <MDBCol md="9" lg='115' xl='4' className="mx-auto -5">
                  <form>
                    <p className="h5 text-center mb-4">Sign up</p>
                    <div className="black-text">
                      <MDBInput 
                      id='name'
                      label="Your name" 
                      icon="user" 
                      group type="text" 
                      validate error="wrong"
                      value={this.state.name}
                      onChange={e=>this.mychange(e)}
                      success="right" />
                      <MDBInput 
                      id="email"
                      label="Your email" 
                      icon="envelope" 
                      group type="email" 
                      validate error="wrong"
                      value={this.state.email}
                      onChange={e=>this.mychange(e)}
                      success="right" />
                      <MDBInput 
                      id="password"
                      label="Your password" 
                      icon="lock" 
                      group type="password"
                      value={this.state.password}
                      onChange={e=>this.mychange(e)} 
                      validate />
                    </div>
                    <div className="text-center">
                      <MDBBtn 
                      onClick={e=>this.sendreq(e)}
                      color="black">Register</MDBBtn>
                        {<p>
                        Already have an account?
                        <Link to="/signin">
                        Sign in
                        </Link>
                        </p> }
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            );
    }
}

export default signup;



