import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"

const UpdateEntry = (props) => {

    //each form variable needs state
    const [tag, setTag] = useState(1)
    const [dob, setDob] = useState()
    const [dam, setDam] = useState(1)
    const [breed, setBreed] = useState("")
    const [docility, setDocility] = useState(1)
    const [aggression, setAggression] = useState(1)
    const [fertility, setFertility] = useState(1)
    const [milk, setMilk] = useState(1)
    const [calving, setCalving] = useState(1)
    const [calfquality, setCalfQuality] = useState(1)

    const [isToggled, setIsToggled] = useState(false)



    //posts our new data to the back end
    async function handleSubmit(e) {
        e.preventDefault();

        //this is dynamic because of props
        let response = await axios.put(`http://localhost:3000/cows/${props.id}`,
            { tag: tag, dob: dob, dam: dam, breed: breed, docility: docility, aggression: aggression, fertility: fertility, milk: milk, calving: calving, calfquality: calfquality, user_id: props.userId },
            { headers: { Accept: "application/json" } }
        )
        let data = response.data;
        window.location.reload();

    }

    return (
        <div>
            {/*The prop isn't carrying accross */}
            <div className=" mt-5 ">
                <Button className="mb-2" onClick={() => setIsToggled(!isToggled)}>Edit</Button>
                {isToggled &&
                    <div className="container mt-2 border rounded pt-3 mb-5">
                        <form className="formContainer" onSubmit={handleSubmit}>


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Tag</Form.Label>
                                <Form.Control type="number" placeholder="Enter Tag" onChange={(e) => { setTag(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control type="date" placeholder="Enter Tag" onChange={(e) => { setDob(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Dam</Form.Label>
                                <Form.Control type="number" placeholder="Enter Dam's Tag" onChange={(e) => { setDam(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Breed</Form.Label>
                                <Form.Control type="text" placeholder="Breed" onChange={(e) => { setBreed(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Docility</Form.Label>
                                <Form.Control type="text" placeholder="Docility" onChange={(e) => { setDocility(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Aggression</Form.Label>
                                <Form.Control type="text" placeholder="Docility" onChange={(e) => { setAggression(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Fertility</Form.Label>
                                <Form.Control type="text" placeholder="Fertility" onChange={(e) => { setFertility(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Milk</Form.Label>
                                <Form.Control type="text" placeholder="Milk" onChange={(e) => { setMilk(e.target.value) }} />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Calving</Form.Label>
                                <Form.Control type="text" placeholder="Calving" onChange={(e) => { setCalving(e.target.value) }} />
                            </Form.Group>


                            <Button className="mt-2 mb-2" type="submit">Submit</Button>
                        </form>

                    </div>
                }
            </div>
        </div>
    )
}

export default UpdateEntry
