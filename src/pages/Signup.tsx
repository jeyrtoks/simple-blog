import { useEffect, useState } from "react"
import { Form, Link } from "react-router-dom"

const Signup = () => {
    document.title = "Signup"
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    return (
        <>  
            <p>{`${username} ${email} ${password}`}</p>
            <Form className="card">
                <h2 style={{textAlign: "center"}}>Create an Account</h2>
                <input 
                    onChange={(e) => {setUsername(e.target.value)}} 
                    name="username" 
                    type="text" 
                    placeholder="Username..."/>
                <input 
                    onChange={(e) => {setEmail(e.target.value)}} 
                    name="email" 
                    type="text" 
                    placeholder= "Email..."/>
                <input 
                    onChange={(e) => {setPassword(e.target.value)}} 
                    name="password" 
                    type="password" 
                    placeholder="Password..."/> 

                <button type="submit" disabled={loading}>Sign Up</button>
            </Form>
            <p>Already have an account? <Link to="/signin">Sign in!</Link></p>
        </>
    )
}

export default Signup