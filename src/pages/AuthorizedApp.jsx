import { Routes, Route } from "react-router-dom";

// components
import Orders from './orders';
import Products from './products';
import List from '../components/List';


function AuthorizedApp(){
  return(
    <section className="flex">
      <List/>
      <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Orders/>} />
      </Routes>
  </section>  
  )
}

export default AuthorizedApp;