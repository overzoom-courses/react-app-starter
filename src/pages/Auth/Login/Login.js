import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [ values, setValues ] = useState({});

    const navigate = useNavigate();

    function submit(event) {
        event.preventDefault();

        fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json()).then(res => {
            console.log(res.token);
            localStorage.setItem("token", res.token);
            navigate("/home");
        });
    }

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        setValues({ ...values, [name]: value });
    }

    return(
        <div className="container">
            <form onSubmit={(event) => submit(event)} >
                <div className="field">
                    <label>Username</label>
                    <input name="username" type="text" onChange={event => handleChange(event)} />
                </div>

                <div className="field">
                    <label>Password</label>
                    <input name="password"type="password" onChange={event => handleChange(event)} />
                </div>
                <button >Accedi</button>
            </form>
        </div>
    );
}

export default Login;   

