import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "../Home/HomePage";
import GeneratePortfolio from "../GeneratePortfolio/GeneratePortfolio";

function Navigation(){
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route path="/generatePortfolio" element={<GeneratePortfolio/>} />
                </Routes>  
            </Router>
        </>
    )
}

export default Navigation;