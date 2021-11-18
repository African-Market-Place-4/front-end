import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const AddItem = () => {
    let navigate = useNavigate();
    const [item, setItem] = useState({
        product_id: '',
        name: '',
        price_usd: '',
        description: '',
        seller:''
    });

    const handleChanges = event => {
        setItem({
            ...item,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        // e.preventDefault();
        // axios.post('BASE URL GOES HERE/items', item)
        //     .then(resp=>{
        //        setItems(resp.data)
        //         setItem({
        //             name: '',
        //             price_usd: '',
        //             description: '',
        //             seller: ''
        //             });
        //         navigate('/');
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //     })
        axios.post('baseURL/auth/login',this.state)
        .then(resp=>{
            
        })
       navigate('/');
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <h2>Add Item</h2>
                    <label>Name</label>
                    <input id="name"
                        type="text"
                        name="name"
                        placeHolder="enter Name"
                        onChange={handleChanges}
                        value={item.name} />
                        <br/>
                    <label>Description</label>
                    <input id="description"
                        type="text"
                        name="description"
                        placeHolder="Provide Description"
                        onChange={handleChanges}
                        value={item.description} />
                        <br/>
                        <label>Price</label>
                    <input id="price"
                        type="text"
                        name="price"
                        placeHolder="Enter Price"
                        onChange={handleChanges}
                        value={item.price_usd} />
                        <br/>
                        <label>Location</label>
                        
                    <input id="location"
                        type="text"
                        name="location"
                        placeHolder="Enter Location"
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