import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Form from "react-bootstrap/Form"
import axios from 'axios';
import { Button, InputGroup } from 'react-bootstrap';
import DeleteItem from './DeleteItem';
import { Link } from 'react-router-dom';

const CowTable = (props) => {

    const [search, setSearch] = useState("");
    console.log(search)

    //we're passing the array of cows in.
    const data = props.data;
    //pass in id and only render items which match it?
    const id = props.userId;

    //handle item deletion based on unique ID
    async function deleteItem(e, id) {
        e.preventDefault();
        let response = await axios.delete(`http://localhost:3000/cows/${id}`, { headers: { Accept: "application/json" } })
        window.location.reload();

    }

    return (
        <>
            <Form>
                <InputGroup className='mb-3'>
                    <Form.Control placeholder="Enter tag number" onChange={(e) => setSearch(e.target.value)}></Form.Control>
                </InputGroup>
            </Form>

            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Tag</th>
                            <th>DOB</th>
                            <th>Dam</th>
                            <th>Breed</th>
                            <th>Docility</th>
                            <th>Aggression</th>
                            <th>Fertility</th>
                            <th>Calving</th>
                            <th>Calf Quality</th>
                            <th>Milk</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //map through data here, outputting to table 
                            //a filter function has been incldued so the table can be made searchable
                            data.filter((item) => {
                                //tage had to be converted to string for filtering to work
                                return search == "" ? item : item.tag.toString().includes(search)
                            }).map((item) => {
                                if (item.user_id == id) {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.tag}</td>
                                            <td>{item.dob}</td>
                                            <td>{item.dam}</td>
                                            <td>{item.breed}</td>
                                            <td>{item.docility}</td>
                                            <td>{item.aggression}</td>
                                            <td>{item.fertility}</td>
                                            <td>{item.calving}</td>
                                            <td>{item.calfquality}</td>
                                            <td>{item.milk}</td>
                                            {/*Dynamically to a page diaplying unique cow's data*/}
                                            <td><Link to={`/cowpage/${item.id}`}><Button>View</Button></Link></td>
                                            {/*Passes item Id to a function which removes it from DB */}
                                            <td><DeleteItem id={item.id}></DeleteItem></td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default CowTable
