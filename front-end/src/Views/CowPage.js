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
        <div className='container'>
            <h1 className='text-center mb-5'>Cow Data</h1>
            <div className='row rounded Card p-4 mb-5'>

                <div className='col'>
                    <h3>Basic Data</h3>
                    <p><span className='Bold-Text'>Tag:</span> {cows.tag}</p>
                    <p><span className='Bold-Text'>DOB:</span> {cows.dob}</p>
                    <p><span className='Bold-Text'>Dam:</span> {cows.dam}</p>
                    <Algorithm data={cows}></Algorithm>
                </div>

                {/* PUT DATA VISUALISTIONS HERE */}
                <div className='col'>
                    <CowChart data={cows}></CowChart>

                </div>
                <UpdateEntry id={cowId}></UpdateEntry>
            </div>
            {/* Put the cow notes component here. ID will be passed in as a prop */}
            <div>
                <div >
                    <CowNotes cowId={cowId}></CowNotes>
                </div>
            </div>
        </div>
    )
}

export default CowPage
