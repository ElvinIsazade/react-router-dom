import React from 'react';
import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

const Events = () => {
    const data = useLoaderData();
    const events = data.events
    // if(data.isError) {
    //     return <p>{data.message}</p>
    // }
    return (
        <EventsList events={events} />
    )
}

export default Events;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {isError: true,message: "Could not fetched"}
        // throw new Response(JSON.stringify({message: "Could not fetch events"}),{
        //     status: 500
        // })
        throw json({ message: "Could not fetch events" }, {
            status: 500
        })
    } else {
        const resData = await response.json();
        return resData
    }
}