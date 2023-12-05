import { useState, useEffect } from 'react';
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CowTable from '../Components/CowTable';
import NewEntry from '../Components/NewEntry';
import { Button } from 'react-bootstrap';

/*
The purpose of this page is to view the user's herd data. 
This will also link to components which enable crud functionality for each entry. 
 */

const ViewHerd = () => {

    const [isToggled, setIsToggled] = useState(false)
    const [email, setEmail] = useState("")
    //Fetch user data from rails back end
    const [users, setUsers] = useState([]);
    //Fetch cow data from back end
    const [cows, setCows] = useState([]);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            setEmail(user.email)
            console.log(email)
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get('http://localhost:3000/users', {
                headers: { Accept: 'application/json' }
            });
            console.log("USERS")
            console.log(response.data)
            setUsers(response.data)
        }
        fetchData();

    }, []); // Or [] if effect doesn't need props or state

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get('http://localhost:3000/cows', {
                headers: { Accept: 'application/json' }
            });
            console.log("COWS")
            console.log(response.data)
            setCows(response.data)
        }
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <div className='container mb-5'>

            <h1 className='text-center'>Herd Overview</h1>
            {/*Create a table component, import it here */}
            {/*The old way won't work because Cow is it's own whole model which isn't nested
            YOu will have to base the mapping off of id*/}
            {
                users.map((item) => {
                    if (item.email === email) {
                        return (
                            <NewEntry userId={item.id}></NewEntry>
                        )
                    }

                })
            }
            {
                users.map((item) => {
                    if (item.email === email) {
                        return (
                            <CowTable userId={item.id} data={cows}></CowTable>
                        )
                    }
                })
            }

        </div>
    )
}

export default ViewHerd
