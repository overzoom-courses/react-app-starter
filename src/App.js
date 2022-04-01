import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import HomePage from "./pages/HomePage/Homepage";

function App() {
  
  return (
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
  );
}

export default App;