import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "../Home/HomePage";

function Navigation(){
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                </Routes>  
            </Router>
        </>
    )
}

export default Navigation;