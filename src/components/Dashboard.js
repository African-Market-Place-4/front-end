//Dashboard goes here! Assuming User has logged in

import React from 'react';
import {useState} from 'react';
import AddItem from './AddItem';


const Dashboard = () => {

    const dummyData = [
    {
        name: 'eggs',
        description: 'white',
        price: '$3',
        location: 'sauti'
    },
    {
        name: 'eggs',
        description: 'white',
        price: '$3',
        location: 'sauti'
    },
    {
        name: 'eggs',
        description: 'white',
        price: '$3',
        location: 'sauti'
    },
    {
        name: 'eggs',
        description: 'white',
        price: '$3',
        location: 'sauti'
    }
]

const [items, setItems] = useState(dummyData)

    return (
        <div>
            <AddItem/>
            {
                items.map(item => {
                    return (
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.location}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashboard