import React from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
const DeleteNote = (props) => {

    //handle item deletion based on unique ID
    async function deleteItem(e) {
        e.preventDefault();
        let response = await axios.delete(`http://localhost:3000/notes/${props.id}`, { headers: { Accept: "application/json" } })
        window.location.reload();
    }

    return (
        < div >
            <Button variant="danger" onClick={deleteItem}>Delete</Button>
        </div >
    )
}

export default DeleteNote
