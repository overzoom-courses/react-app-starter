import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            navigate("/home");
        }
    }, [])

    function submit(event) {
        event.preventDefault();

        fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" }
        }).then((res) => {
            console.log("Request ended: ", res);
            if (!res.ok) {
                alert("Username o password errati");
                return;
            }

            return res.json();
        }).then(body => {
            console.log("Response body: ", body);
            console.log("JWT is: ", body.token);

            localStorage.setItem("jwt", body.token);
            navigate("/home");
        }).catch(err => {
            console.error(err);
            alert("Connessione al server fallita");
        });
    }

    function onUsernameChange(event) {
        const value = event.target.value;
        setUsername(value);
    }
    
    function onPasswordChange(event) {
        const value = event.target.value;
        setPassword(value);
    }

    return(
        <div className="container">
            <form onSubmit={(event) => submit(event)} >
                <div className="field">
                    <label>Username</label>
                    <input name="username" type="text" onChange={event => onUsernameChange(event)} />
                </div>

                <div className="field">
                    <label>Password</label>
                    <input name="password" type="password" onChange={event => onPasswordChange(event)} />
                </div>
                <button >Accedi</button>
            </form>
        </div>
    );
}

export default Login;   

