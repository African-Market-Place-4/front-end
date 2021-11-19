import React from 'react';
import styled from 'styled-components';


const LandingItem = (props) =>{
    const { item } = props
    return(
    <ItemStyle>
        <div>
            <p><StyledSpan>Item:</StyledSpan> {item.name}</p>
            <p><StyledSpan>Price:</StyledSpan> ${item.price_usd}</p> 
            <p><StyledSpan>Description:</StyledSpan> {item.description}</p>
            {/* <p><span>Location:</span> {item.location}</p>  */}
        </div>
    </ItemStyle>
    )}
export default LandingItem;

const ItemStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    /* border:3px solid black; */
    width:250px;
    height:250px;
    margin:20px;
    background-color:rgba(255, 255, 255, 0.919);

    }
    img{
        width:150px;
        height:150px;
        object-fit: cover;
    }
    p{
        font-size:1.5rem;
    }
`
const StyledSpan=styled.span`
    font-weight:bold;
        &:hover{
            text-decoration:none;
            text-decoration-color:none;
            cursor:text;
        }
`
