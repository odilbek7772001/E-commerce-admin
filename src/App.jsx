import './App.css';


// pages
import AuthorizedApp from './pages/AuthorizedApp';
import UnAuthorizedApp from './pages/UnAuthorizedApp';


function App() {
    
  if(false) {
    return  <AuthorizedApp/>
  }else {
    return  <UnAuthorizedApp/>
  }
  
}

export default App;
