import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import HomePage from "./pages/HomePage/Homepage";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, [])

  return (
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
  );
}

export default App;