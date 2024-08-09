import './App.css';
import useToken from './context/useToken';

// pages
import AuthorizedApp from './pages/AuthorizedApp';
import UnAuthorizedApp from './pages/UnAuthorizedApp';


function App() {

  const [ token ] = useToken()
    
  if(true) {
    return  <AuthorizedApp/>
  }else {
    return  <UnAuthorizedApp/>
  }
}

export default App;
