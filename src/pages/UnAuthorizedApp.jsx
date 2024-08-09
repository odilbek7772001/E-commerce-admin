import {Routes, Route} from "react-router-dom";

import Login from "./login";

function UnAuthorizedApp(){
    return(
        <>
           <Routes>
               <Route path="/login" element={<Login/>} />
           </Routes>
        </>
    );
}

export default UnAuthorizedApp;