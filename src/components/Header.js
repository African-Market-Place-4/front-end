import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Header = () =>{
    return(
    <HeaderStyle>
        <h1>African Marketplace</h1>
        <NavContainer>
            <NavStyle>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/additem">Add Item</Link></li>
                <h2>Empowering small business owners in South Africa</h2>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </NavStyle>
        </NavContainer>
    </HeaderStyle>)
}
export default Header

const HeaderStyle = styled.div`
    background-color: #343a40;
    flex-direction:column;
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    margin:0px;
    padding:0px;

    h1{
        background-color:white;
        width:100%;
        font-size:4rem;
        margin:0;
        text-align:center;
    }

    p {
        font-weight: bold;
        font-size: 1.5em;
    }
`
const NavContainer=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    background-color:rgba(14, 12, 12, 0.556);
;
`
const NavStyle = styled.ul`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:1000px;
    height:40px;
    margin:0px;
    padding:0px;
    color:white;
  li {
        display: flex;
        flex-direction:row;
        padding: 0;
        color:white;
        
        a {
            text-decoration: none;
            color: white;
            font-size: 1.4em;
            &:hover{
            font-weight:bold;
            text-decoration:underline;
            text-decoration-color:rgb(287, 69, 69);
            }
        }
        
       
    }
    h2{
            font-size:1.2rem;
            display:flex;
            align-items:center;
            justify-content:center;
            
        }
`