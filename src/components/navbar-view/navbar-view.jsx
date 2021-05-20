import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

let logOut = function (){
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("email");
  localStorage.removeItem("birthday");
  localStorage.removeItem("favoriteMovies");

  window.open("/", "_self");
}



export class NavbarView extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(<Container>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="/">Marilyn's top 10</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/users/${user}">My Profile</Nav.Link>
    </Nav>
  
      <Button onClick={() => logOut()} variant="dark">Log out</Button>
    
    
    </Navbar.Collapse>
  </Navbar>
  </Container>

    )}}
export default NavbarView;