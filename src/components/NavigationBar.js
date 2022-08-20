import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import "../styles/NavigationBar.scss"


const NavigationBar = () => {


  return (
        <Navbar variant="dark" expand="lg" className="NavbarStyle">
            <Navbar.Brand className="NNB" href="/">
            PMal's Lab Group
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="NavigationBarLinks" to="/">Home</Link>
                    <Link className="NavigationBarLinks" to="/pmal/">PMal</Link>
                    <Link className="NavigationBarLinks" to="/research/">Research</Link>
                    <Link className="NavigationBarLinks" to="/publications/">Publications</Link>
                    <Link className="NavigationBarLinks" to="/people/">People </Link>
                    <Link className="NavigationBarLinks" to="/alumni/">Alumni </Link>
                    <Link className="NavigationBarLinks" to="/contacts/">Contacts</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavigationBar
