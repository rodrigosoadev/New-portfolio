import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import github from '../assets/img/github1.svg'


function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>   
                <Col sm={6}>
                    <img  src={logo} alt='Logo'/>
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                    <a href="https://www.linkedin.com/in/rodrigo-soares-097276241/" target='_blank'><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/rodrigosoadev" target='_blank' ><img src={github} alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100004856945788" target='_blank'><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/_rodrigosoa/" target='_blank'><img src={navIcon3} alt="" /></a>
                    </div>
                    <p>CopyRight 2022, All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
