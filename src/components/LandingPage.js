import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import LandingItem from './LandingItem'

const initialItems = [
    {
        id: 1,
        name: 'eggs',
        description: 'white',
        price: '$3',
        location: 'US'
    },
    {   
        id:2,
        name: 'milk',
        description: 'white',
        price: '$4',
        location: 'US'
    },
    {
        id:3,
        name: 'Pineapple Juice',
        description: 'orange',
        price: '$5',
        location: 'Hawaii'
    },
    {
        id:4,
        name: 'Cheese',
        description: 'white',
        price: '$6',
        location: 'Italy'
    },
    {
        id: 5,
        name: 'Chocolate',
        description: 'brown',
        price: '$2',
        location: 'Germany'
    },
    {   
        id:6,
        name: 'Rice',
        description: 'white',
        price: '$4',
        location: 'Spain'
    },
    {
        id:7,
        name: 'Wheat',
        description: 'golden',
        price: '$5',
        location: 'US'
    },
    {
        id:8,
        name: 'Wine',
        description: 'white',
        price: '$10',
        location: 'New Zealand'
    }
]


const LandingPage = () =>{
    const[items, setItems]=useState(initialItems)
    const [isToggled,setIsToggled]=useState(false)


    const toggle=()=>{
        setIsToggled(!isToggled)
        console.log(isToggled)
    }

    return(
    <HomeStyle>
        <h2>See what our users have to offer!</h2>
        {isToggled && <ListStyle>
            <LandingItem item={items[0]}/>
            <LandingItem item={items[1]}/>
            <LandingItem item={items[2]}/>
            <LandingItem item={items[3]}/>
        </ListStyle>}
        {
        !isToggled &&
        <ListStyle>
            {items.map(item=>{
            return <LandingItem key={item.id} item={item}/>
            })}
        </ListStyle>
        }
        <p>Click <span onClick={toggle}>HERE</span> {isToggled ? 'to browse more items...' : 'to hide items...'}</p>
        <Link to="/login" className='styledLink'>or click <span>HERE</span> to list your own! </Link>
    </HomeStyle>
    )}
export default LandingPage;

const HomeStyle = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
   
  li {
        display: flex;
        flex-direction:row;
        padding: 0.3rem 1rem;
        
        a {
            text-decoration: none;
            color: black;
            font-size: 1.4em;
        }
    }
    h2{
            font-size:2rem;
        }
    span{
        font-weight:bold;
    }
    span:hover{
        cursor:pointer;
    }
    .styledLink{
        text-decoration:none;
        color:black;
    }
`
const ListStyle = styled.ul`
    display:flex;
    flex-wrap:wrap;
`
