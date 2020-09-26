import React from "react";
import {MDBRow,  MDBCard, MDBCardBody, MDBNavLink, MDBCol, MDBCardImage, MDBView, MDBMask, MDBCardTitle, MDBCardText} from "mdbreact";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import MyBlog from "./myblog"
// import { Route } from "react-router";

const SocialPage = () => {
  return (
    <Router>
    <MDBRow>
      <MDBCol md="1" xl='4' className="mx-auto -5">
        <div className="card-group">
          <MDBCard personal className="mb-md-0 mb-4">
            <MDBView hover>
              <MDBCardImage top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" alt="MDBCard image cap"/>
            </MDBView>
            <MDBCardBody>
                <MDBCardTitle>Anna</MDBCardTitle>
              <a className="balck-text">
                Status
              </a>
              <MDBCardText>
                Anna is a web designer living in New York.
              </MDBCardText>
              <hr />
              <a ><MDBNavLink to="/myblog"><b className="black-text">My-Blogs</b></MDBNavLink></a>
              <p className="card-meta float-right">Joined in 2012</p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>
    </MDBRow>
    <Switch>
        <Route path="/myblog">
            <MyBlog />
        </Route>
    </Switch>
    </Router>
  );
}

export default SocialPage;