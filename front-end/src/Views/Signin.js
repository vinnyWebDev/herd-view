import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//use navigate is sued tor edirect our users
import { useNavigate, Link } from 'react-router-dom'
//firebase functions
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const Signin = () => {
    //user credentials we're taking in
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // we must instantiate getAuth() if we wish to use firebase's authentication functionalities
    const auth = getAuth();

    const navigate = useNavigate();

    async function handleSignin(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                //success
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                //error
                alert(error)
            })

    }

    return (
        <div className='Content'>

            <div className='CredentialsCard'>
                <h1 className='mb-3'>Sign In</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Enter email address'></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Enter password'></Form.Control>
                    </Form.Group>

                    <Button onClick={(e) => { handleSignin(e) }}>Sign In</Button>
                    <div className='mt-3'>
                        <Link className='LinkText' to="/signup">Register</Link>
                        <Link className='LinkText' to="/resetpassword">Frogot Password</Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Signin
