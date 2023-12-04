import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import UpdateEntry from '../Components/UpdateEntry.js';
import CowNotes from '../Components/CowNotes.js';
import CowChart from '../Components/CowChart.js';
import Algorithm from '../Components/Algorithm.js';

const CowPage = () => {

    //Fetch cow data from back end
    const [cows, setCows] = useState([]);
    const params = useParams();
    const cowId = params.cowid;

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get(`http://localhost:3000/cows/${cowId}`, {
                headers: { Accept: 'application/json' }
            });
            setCows(response.data)
        }
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <div className='row'>
            <div className='col'>
                <h1 className='mt-5'>Cow: {cows.tag}</h1>
                <p>DOB: {cows.dob}</p>
                <p>DAM: {cows.dam}</p>
                <p>Breed: {cows.breed}</p>
                <p>Docility: {cows.docility}</p>
                <p>Aggression: {cows.aggression}</p>
                <p>Fertility {cows.fertility}</p>
                <p>Ease of Calving {cows.calving}</p>
                <p>Calf Quality: {cows.calfquality}</p>
                <p>Milk Production: {cows.milk}</p>
            </div>

            {/* PUT DATA VISUALISTIONS HERE */}
            <div className='col'>
                <UpdateEntry id={cowId}></UpdateEntry>
            </div>

            <CowChart data={cows}></CowChart>

            {/* Put the cow notes component here. ID will be passed in as a prop */}
            <div>
                <Algorithm data={cows}></Algorithm>
                <CowNotes cowId={cowId}></CowNotes>
            </div>
        </div>
    )
}

export default CowPage
