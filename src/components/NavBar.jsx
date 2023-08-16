import React from "react";
import{ Navbar, Container, Nav} from "react-bootstrap"
import { useState, useEffect } from "react";
import newLogo from "./assets/img/newLogo.svg" 
import navIcon1 from "./assets/img/nav-icon1.svg";
import navIcon2 from "./assets/img/nav-icon2.svg";
import navIcon3 from "./assets/img/nav-icon3.svg";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const[scrolled, seScrolled] = useState(false);

  useEffect(() => {
      const onScroll = () =>{
          if(window.scrollY > 50){
              seScrolled(true);
          } else{
              seScrolled(false);
          }
      }

      window.addEventListener("scroll", onScroll);

      return() => window.removeEventListener("scroll", onScroll);
  }, [])


  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  }


  return(
      <Navbar expand="md" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#home">
          <img src={newLogo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#project"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projectos</Nav.Link>
          <Nav.Link href="#contacto"className={activeLink === 'contacto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contacto')}>Contacto</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
              <a href="https://www.linkedin.com/in/horacio-cano-b19545243" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://www.facebook.com/horacio.cano.90" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/horacio.cano" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
          </div>
          <a href="https://github.com/22-00?tab=repositories" rel="noopener noreferrer" target="_blank"  ><button className="vvd"><span>Repositorio</span></button></a>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}