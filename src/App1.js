import { Route, Routes } from "react-router-dom";
import App from "./App";
import Signup from "./Signup";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";

function App1(){
    return(
        <BrowserRouter>
        <div>
            <Nav/>
            <Routes>
            <Route path="/Signup"element={<Signup/>}/>
                <Route path="/App"element={<App/>}/>
            </Routes>
                
                           

        </div>
        </BrowserRouter>
        
    )
}

export default App1;