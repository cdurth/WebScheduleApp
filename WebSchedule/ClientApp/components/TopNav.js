import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {PrivateRoute} from './PrivateRoute'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class TopNav extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" >WebScheduleApp</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/">
                            <NavItem eventKey={1}>
                                Home
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/counter">
                            <NavItem eventKey={2}>
                                Counter
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <NavItem eventKey={3}>
                                Login
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/protected">
                            <NavItem eventKey={2}>
                                Protected
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default TopNav;