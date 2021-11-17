import React from 'react';
import styled from 'styled-components';


const LandingItem = (props) =>{
    const { item } = props
    return(
    <ItemStyle>
        <div>
            <p><span>Item:</span> {item.name}</p>
            <p><span>Price:</span> {item.price}</p> 
            <p><span>Description:</span> {item.description}</p>
            <p><span>Location:</span> {item.location}</p> 
        </div>
    </ItemStyle>
    )}
export default LandingItem;

const ItemStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:2px solid black;
    width:250px;
    height:250px;
    margin:20px;

    span{
        font-weight:bold;
    }
    img{
        width:150px;
        height:150px;
        object-fit: cover;
    }
`