import React, { useState } from 'react'
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//use navigate is used to redirect our users
import { useNavigate, Link } from 'react-router-dom'

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const auth = getAuth()
    const navigate = useNavigate();


    //calls passwors reset function from firebase which sends an email to the given address
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        sendPasswordResetEmail(auth, email).then(() => {
            alert("Password reset email sent.")
            navigate("/signin");

        }).catch((error) => {
            //error
            alert(error)
        })


    }

    return (
        <div className='Content'>

            <div className='CredentialsCard'>
                <h1 className='mb-3'>Password Reset</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onChange={(e) => { setEmail(e.target.value) }} className='mb-3' type="email" placeholder='Enter email address'></Form.Control>
                        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default ResetPassword
