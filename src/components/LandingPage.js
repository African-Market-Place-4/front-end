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

]


const LandingPage = () =>{
    const[items, setItems]=useState(initialItems)
    const [isToggled,setIsToggled]=useState(false)

    // Need to do!!
    // 1)Make sure we are making axios call to the correct address.
    // 2)Check response to see if we are getting data.
    // 3)setItems to correct response data.
    

    useEffect(()=> {
        axios.get('https://african-marketplace-4.herokuapp.com/api/items')
            .then(resp=>{
                let itemList = resp.data
                console.log(itemList)
                let newList = []
                for(let i =0;i<itemList.length;i++){
                    let itemToUse = itemList[i]
                    if(itemToUse.name !== 'alex' && itemToUse.name !=='Alex Hoskins' && itemToUse.name !=='blue'&& itemToUse.name !=='orange'&& itemToUse.name !=='joseph' && itemToUse.name !=='red'){
                        newList.push(itemToUse)
                    }
                }
                setItems(newList)
            })
            .catch(err=>{
                console.log('this is err',err)
            })
    }, []);

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
        <FuncStyle>
            <p>Click <StySpan onClick={toggle}>HERE</StySpan> {isToggled ? 'to browse more items...' : 'to hide items...'}</p>
            <p>or click <Link to="/additem" className='styledLink'><StySpan>HERE</StySpan></Link> to list your own! </p>
        </FuncStyle>
    </HomeStyle>
    )}
export default LandingPage;

const HomeStyle = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    background-image:url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80');
    object-fit:cover;
    background-repeat:repeat;
    width:100%;
    background-position:center;
    background-size:100%;
    margin:0;
    min-height:100vh; 
    box-sizing:border-box;
    
    
   
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
            font-size:1.4rem;
            color:white;
            background-color:rgb(287, 69, 69);
            width:400px;
            text-align:center;
            margin-top:20px;
            border-radius:10px;
        }
   
    }
    
    .styledLink{
        text-decoration:none;
        color:black;
    }
`
const ListStyle = styled.ul`
    display:flex;
    flex-wrap:wrap;
    /* background-image:url('https://images.unsplash.com/photo-1605319760321-91c129fd463a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80'); */
`
const FuncStyle = styled.div`
    width:100%;
    background-color:rgba(255, 255, 255, 0.919);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:270px;
    height:100px;
    margin-bottom:20px;
    margin-top:20px;
    padding:20px;
`
const StySpan=styled.span`
    font-weight:bold;
        &:hover{
            text-decoration:underline;
            text-decoration-color:rgb(287, 69, 69);
            cursor:pointer;
        }
`