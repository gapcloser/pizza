import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaPizzaSlice} from 'react-icons/fa'

export const Nav = styled.div`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    padding: 0 20px;
    align-items: center;
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const NavIcon = styled.div`
    display: block;
    cursor: pointer;
    color: #fff;
`

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: tranlate(-50%, -15%);
`