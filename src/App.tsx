import Login from "./components/Login/login";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/fonts/poppins.css';
import Register from "./components/Register/register";


function App () {
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Login />} />
            <Route path ="/register" element={<Register />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;