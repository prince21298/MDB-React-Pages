import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Link} from "react-router-dom"
import axios from 'axios'
export class FormPage extends Component {
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
    }
    sendreq=(e)=>{
        const {email,password}=this.state

        const obj={
            "email":email,
            "password":password
        }
        if(email.includes('@')){
            if(password.length>6){
            axios.post('http://localhost:3050/signin',obj).then(result=>{
                console.log(result)
            }).catch(err=>{
                console.log(err)
            })
                
            }
        }
    }
    mychange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    render() {

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="9" lg='115' xl='4' className="mx-auto -5">
                        <form>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="black-text">
                                <MDBInput 
                                id = "email"
                                label="Your email" 
                                icon="envelope" 
                                group type="email" 
                                validate error="wrong"
                                value={this.state.email}
                                onChange={e=>this.mychange(e)}
                                success="right" />
                                <MDBInput 
                                label="Your password"
                                id='password'
                                icon="lock" 
                                group type="password" 
                                value={this.state.password}
                                onChange={e=>{this.mychange(e)}}
                                success="right"
                                validate />
                            </div>
                            <div className="text-center">
                                <MDBBtn 
                                onClick={e=>this.sendreq(e)}
                                color="black">Login</MDBBtn>
                            </div>
                            <div>
                            <p>
                            Forgot password?
                            </p>
                            <p>
                            Don't have an account?
                            <Link to="/Signup">
                             Sign Up
                            </Link>
                            </p>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default FormPage