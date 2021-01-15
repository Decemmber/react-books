import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import classes from "./Navigation.module.css";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="indigo darken-1" dark expand="md">
          <MDBContainer>
            <MDBNavbarBrand>
              <NavLink to="#!">
                <strong className="white-text">BooksStore</strong>
              </NavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <div
                  style={{ minWidth: "420px" }}
                  className="input-group offset-lg-2"
                >
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                  <input
                    onChange={(e) => this.props.searchBook(e)}
                    type="text"
                    className="form-control"
                    placeholder="Search a book"
                    aria-label="Search a book"
                    aria-describedby="basic-addon"
                  />
                </div>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.props.modalToggleHandler}
                    className="waves-effect waves-light"
                    to="#!"
                  >
                    <div className={classes.cartCountContainer}>
                      {this.props.cart.length > 0 ? (
                        <span className={classes.cartCount}>
                          {this.props.cart.length}
                        </span>
                      ) : null}
                      <i className="fas fa-shopping-bag"></i>
                    </div>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
