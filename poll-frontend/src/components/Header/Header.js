import React  from "react";
import{Nav, Navbar, NavItem, Badge, NavDropdown} from "react-bootstrap";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { deleteCookie } from "../../helper";
import {Link} from "react-router-dom";

const header = React.memo(props => {
  const handleLogout = () => {
    deleteCookie("auth");
    window.location.href = "/login";
  };

  

  return (
    
    <Navbar className="navbar" collapseOnSelect>
    <Navbar.Brand style={{color:"#000000", fontWeight:"800"}} href="#home">Amtolit</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#"></Nav.Link>
        <Nav.Link href="#"></Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link style={{color:"#000000"}} href="#">Login</Nav.Link>
        <Nav.Link style={{color:"#000000"}} href="#">
          Log Out
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
 
  );
});
export default header;

