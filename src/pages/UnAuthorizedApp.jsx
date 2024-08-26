import {Routes, Route} from "react-router-dom";
import Login from "./login";

function UnAuthorizedApp(){
    return(
        <>
           <Routes>
               <Route path="/" element={<Login/>} />
           </Routes>
        </>
    );
}

export default UnAuthorizedApp;