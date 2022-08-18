import React from 'react'
import {useState, useEffect} from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import github from '../assets/img/github1.svg'
import {
    BrowserRouter as Router
  } from "react-router-dom";
  

function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              <img  className='logo' src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>

                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>

                <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/rodrigo-soares-097276241/" target='_blank'><img src={navIcon1} alt="" /></a>
                  <a href="https://github.com/rodrigosoadev" target='_blank' ><img src={github} alt="" /></a>
                  <a href="https://www.facebook.com/profile.php?id=100004856945788" target='_blank'><img src={navIcon2} alt="" /></a>
                  <a href="https://www.instagram.com/_rodrigosoa/" target='_blank'><img src={navIcon3} alt="" /></a>
                </div>
               
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    )
  }

export default NavBar
