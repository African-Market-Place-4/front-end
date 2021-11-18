import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LandingItem from './LandingItem';
import axios from 'axios';
const initialItems = [
    {
        product_id: 1,
        name: 'eggs',
        price_usd: '$3',
        description: 'white',
        seller: 'US'
    },
    {   
        product_id:2,
        name: 'milk',
        description: 'white',
        price_usd: '$4',
        seller: 'US'
    },
    {
        product_id:3,
        name: 'Pineapple Juice',
        price_usd: '$5',
        description: 'orange',
        seller: 'Hawaii'
    },
    {
        product_id:4,
        name: 'Cheese',
        price_usd: '$6',
        description: 'white',
        seller: 'Italy'
    },
    {
        product_id: 5,
        name: 'Chocolate',
        price_usd: '$2',
        description: 'brown',
        seller: 'Germany'
    },
    {   
        product_id:6,
        name: 'Rice',
        price_usd: '$4',
        description: 'white',
        seller: 'Spain'
    },
    {
        product_id:7,
        name: 'Wheat',
        price_usd: '$5',
        description: 'golden',
        seller: 'US'
    },
    {
        product_id:8,
        name: 'Wine',
        price_usd: '$10',
        description: 'white',
        seller: 'New Zealand'
    }
]


const LandingPage = () =>{
    const[items, setItems]=useState(initialItems)
    const [isToggled,setIsToggled]=useState(false)

    // Need to do!!
    // 1)Make sure we are making axios call to the correct address.
    // 2)Check response to see if we are getting data.
    // 3)setItems to correct response data.
    

    // useEffect(()=> {
    //     axios.get('BASEURL/items')
    //         .then(resp=>{
    //             console.log(resp)  
    //             setItems(resp)
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })
    // }, []);

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
            return <LandingItem key={item.product_id} item={item}/>
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
