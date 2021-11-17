import React, { useState } from "react";
import axios from 'axios';


const AddItem = () => {
    const [item, setItem] = useState({
        name: '',
        description: '',
        price: '',
        location: ''
    });

    const handleChanges = event => {
        setItem({
            ...item,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
       
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
                        value={item.price} />
                        <br/>
                        <label>Location</label>
                        
                    <input id="location"
                        type="text"
                        name="location"
                        placeHolder="Enter Location"
                        onChange={handleChanges}
                        value={item.location} />
                    </div>
            </form>
            <div>
                <br/>
                <button>Add Item</button>
            </div>
            {/* PAGE CONTAINER ENDS HERE */}
        </div>
    )
    }
export default AddItem;