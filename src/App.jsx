import './App.css';
import useAuth from './hook/useAuth';


// pages
import AuthorizedApp from './pages/AuthorizedApp';
import UnAuthorizedApp from './pages/UnAuthorizedApp';


function App() {

  const [ user ] = useAuth();
    
  if(true) {
    return  <AuthorizedApp/>
  }else {
    return  <UnAuthorizedApp/>
  }
  
}

export default App;
