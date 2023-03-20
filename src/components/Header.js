import React, { useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header() {

    const navbar = {
        background: "#FFFFFF",
        padding: "0"
      };

    const navbar_subtitle={
        marginLeft: "4%"
    }

    const navbar_subtitle_fonts = {
        fontFamily: 'Liberation Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: "18px",
        lineHeight: "31px",
        alignItems: "center",
        color: "#0F2B61"
    }

    return (
        <Navbar style={navbar} expand="lg">
            <div className="navbar_title">
            <h5 className="navbar_title_font">American Compo Legal</h5>
            </div>
                {/* <Navbar.Brand style={navbar_title}><h5>American Compo Legal</h5></Navbar.Brand> */}

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={navbar_subtitle}>
              <Nav className="me-auto gap-4">
                <Nav.Link style={navbar_subtitle_fonts} href="/">Home</Nav.Link>
                <Nav.Link style={navbar_subtitle_fonts} href="#link">Talcum</Nav.Link>
                <Nav.Link style={navbar_subtitle_fonts} href="#link">Camp Lejeune</Nav.Link>
                <Nav.Link style={navbar_subtitle_fonts} href="#link">Zantac</Nav.Link>
                <Nav.Link style={navbar_subtitle_fonts} href="#link">NEC (BABY FORMULA)</Nav.Link>
                <Nav.Link style={navbar_subtitle_fonts} href="#link">Feedback</Nav.Link> 
                <Nav.Link style={navbar_subtitle_fonts} href="#link">Contact</Nav.Link>                
              </Nav>
            </Navbar.Collapse>

            <div className="navbar_title_last">
            <h5 className="navbar_title_last_font">Call Now</h5>
            </div>
        </Navbar>
      );
}
