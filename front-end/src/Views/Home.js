import React from 'react'
import { signOut, getAuth } from "firebase/auth"

const Home = () => {
    //once again we import getAuth
    const auth = getAuth();

    async function handleSignOut() {
        try {
            //auth must be passed in ehre
            console.log("test")
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => { handleSignOut() }}>Sign Out</button>
        </div>
    )
}

export default Home
