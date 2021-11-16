//Dashboard goes here! Assuming User has logged in

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

    return (
        <div>I am a dashboard

        Displays marketplace items in one section - map through dummydata
        Displays users items in another section
        create item form

        item cards need: 
        item name
        item description 
        item price
        item location

        </div>
    )
}

export default Dashboard