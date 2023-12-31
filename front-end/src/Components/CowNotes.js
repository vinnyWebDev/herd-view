import { useEffect, useState } from 'react'
import axios from "axios";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import DeleteNote from './DeleteNote';

//component for handling the retreival and displaying of notes pertaining to cows
const CowNotes = (props) => {

    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const [isToggled, setIsToggled] = useState(false)


    //notes will have to be pulled from API
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get(`http://localhost:3000/notes/`, {
                headers: { Accept: 'application/json' }
            });
            console.log("Notes")
            console.log(response.data)
            setNotes(response.data)
        }
        fetchData();
    }, []); // Or [] if effect doesn't need props or state


    //include post method for new notes 
    //posts our new data to the back end
    async function handleSubmit(e) {
        e.preventDefault();

        //this is dynamic because of props
        let response = await axios.post("http://localhost:3000/notes",
            { title: title, body: body, cow_id: props.cowId },
            { headers: { Accept: "application/json" } }
        )
        let data = response.data;
        console.log(response.data);
        window.location.reload();
    }


    return (
        <div className='mb-5'>
            <h3 className='text-center'>Notes</h3>

            <Button className="mb-2" onClick={() => setIsToggled(!isToggled)}>Add Notes</Button>
            {isToggled &&
                <Form className='Card p-3 rounded'>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" placeholder="Title" onChange={(e) => { setBody(e.target.value) }} />
                    </Form.Group>
                    <Button onClick={handleSubmit} className='my-2'>Add</Button>
                </Form>
            }

            {
                //pull notes from our api and output to screen
                notes.map((item) => {
                    //only show notes for given cow
                    if (item.cow_id == props.cowId) {
                        return (
                            <div className='my-3 rounded p-4 Card'>
                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                                <DeleteNote id={item.id}></DeleteNote>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default CowNotes
