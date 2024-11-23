import Login from "./components/Login/login";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/fonts/poppins.css';


function App () {
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Login />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;