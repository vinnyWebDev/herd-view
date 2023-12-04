import React from 'react'
import { useState } from 'react'
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//use navigate is used to redirect our users
import { useNavigate, Link } from 'react-router-dom'
//firebase functions
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const Signup = () => {
    //user credentials we're taking in
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // we must instantiate getAuth() if we wish to use firebase's authentication functionalities
    const auth = getAuth();

    const navigate = useNavigate();


    async function handleSignUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                //success
                console.log(user);

                //this creates a user in the back end.
                //can we set it up so herd is related with this user
                async function handleSubmit() {
                    console.log(email)
                    let response = await axios.post("http://localhost:3000/users",
                        { email: email },
                        { headers: { Accept: "application/json" } })
                    let data = response.data;
                    console.log(response.data)


                }
                handleSubmit();
                navigate("/signin");

            })
            .catch((error) => {
                //error
                alert(error)
            })



    }

    return (
        <div className='Content'>

            <div className='CredentialsCard'>
                <h1 className='mb-3'>Sign Up</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Enter email address'></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Enter password'></Form.Control>
                    </Form.Group>

                    <Button onClick={(e) => { handleSignUp(e) }}>Sign Up</Button>
                </Form>
            </div>
        </div>
    )
}

export default Signup
