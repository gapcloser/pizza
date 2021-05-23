import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './Navbar.style.js'

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <Bars />
                </NavIcon>
            </Nav>
        </div>
    )
}

export default Navbar
