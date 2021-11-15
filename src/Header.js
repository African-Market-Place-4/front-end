import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Header = () =>{
    return(
    <HeaderStyle>
        <h1>African Marketplace</h1>
        <NavStyle>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <h2>Empowering small business owners in South Africa</h2>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/">FAQ</Link></li>
        </NavStyle>
    </HeaderStyle>)
}
export default Header;

const HeaderStyle = styled.div`
    background-color: #fcd5ce;
    flex-direction:column;
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;

    h1{
        background-color:white;
        width:100%;
        font-size:4rem;
        margin:0;
    }

    p {
        font-weight: bold;
        font-size: 1.5em;
    }
`

const NavStyle = styled.ul`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:1000px;
    height:20px;
  li {
        display: flex;
        flex-direction:row;
        padding: 0;
        
        a {
            text-decoration: none;
            color: black;
            font-size: 1.4em;
        }
       
    }
    h2{
            font-size:1rem;
        }
`