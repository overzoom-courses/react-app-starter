import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
            navigate("/auth/login");
            return;
        }

        fetch(`${process.env.REACT_APP_API_URL}/auth/me`, {
            headers: {
                Authorization: token,
            }
        }).then(res => {
            if (!res.ok) {
                localStorage.removeItem("jwt");
                navigate("/auth/login");
                return;
            }

            return res.json();
        }).then(me => setUsername(me.username));
    }, []);

    return(
        <div>
            Benvenuto {username}
        </div>
    )
}

export default HomePage;