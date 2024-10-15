import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/SignUp";
import Signin from "./pages/Signin";
import NavBar from "./components/NavBar";
import AddRenter from "./pages/AddRenter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/add-renter" element={<AddRenter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
