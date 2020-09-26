import React, { Component } from "react";
import {
  MDBNavbar, MDBBtn, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBIcon
} from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddBlog from "./add_blog"
import MyBlog from "./myblog"
import AllBlog from "./allblog"
import Profile from "./profile"


class Home extends Component {
  constructor(){
    super()
    this.state = {
      isOpen: false
    };
  }



  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar dark expand="md">
        <MDBBtn outline href="/home" color="black">
        <strong>BLOG APP</strong>
          </MDBBtn>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/allblog"><b className="black-text" >Home</b></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/myblog"><b className="black-text">My-Blogs</b></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/addblog"><b className="black-text">Add-Blog</b></MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" className="black-text" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right className="dropdown-default">
                  <MDBNavLink to="/profile"><b className="black-text">Profile</b></MDBNavLink>
                    <MDBNavLink to="/addblog"><b className="black-text">Add-Blog</b></MDBNavLink>
                    <MDBBtn outline href="/signin" color="black">
                      Log-Out
                  <MDBIcon icon="chevron-circle-left" className="ml-1" />
                    </MDBBtn>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <Switch>
          <Route path="/addblog">
            <AddBlog />
          </Route>
        </Switch>
        <Switch>
          <Route path="/myblog">
            <MyBlog />
          </Route>
        </Switch>
        <Switch>
          <Route path="/allblog">
            <AllBlog />
          </Route>
        </Switch>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Home;