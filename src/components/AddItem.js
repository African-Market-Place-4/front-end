import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddItem.css';


const AddItem = () => {
    let navigate = useNavigate();
    const [item, setItem] = useState({
        name: '',
        price_usd: 0,
        description: '',
        seller:0
    });

    const handleChanges = event => {
        setItem({
            ...item,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        axios.post('https://african-marketplace-4.herokuapp.com/api/items', item)
            .then(resp=>{
                navigate('/')
            })
            .catch(err=>{
                console.log('error from axios',err)
            })
    }
    

    return (
        <div className='create-account-page'>
            <form onSubmit={submitForm}>
                <div>
                    <h2>Add Item</h2>
                    <label>Name</label>
                    <input id="name"
                        type="text"
                        name="name"
                        placeholder="enter Name"
                        onChange={handleChanges}
                        value={item.name} />
                        <br/>
                    <label>Description</label>
                    <input id="description"
                        type="text"
                        name="description"
                        placeholder="Provide Description"
                        onChange={handleChanges}
                        value={item.description} />
                        <br/>
                        <label>Price</label>
                    <input id="price_usd"
                        type="text"
                        name="price_usd"
                        placeholder="Enter Price"
                        onChange={handleChanges}
                        value={item.price_usd} />
                        <br/>
                        <label>Seller</label>
                        
                    <input id="seller"
                        type="text"
                        name="seller"
                        placeholder="Enter seller"
                        onChange={handleChanges}
                        value={item.seller} />
                    </div>
            </form>
            <div>
                <br/>
                <button onClick={submitForm}>Add Item</button>
            </div>
            {/* PAGE CONTAINER ENDS HERE */}
        </div>
    )
    }
export default AddItem;