import { Routes, Route } from "react-router-dom";

// pages
import List from '../components/List';
import Admin from "./admin";
import Products from './products';
import Orders from './orders';
import Contacts from "./contacts";
import Categories from "./categories";
import Payments from "./payments";
import Contracts from "./contracts";


function AuthorizedApp(){
  return(
    <section className="flex">
      <List/>
      <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/payments" element={<Payments/>} />
          <Route path="/contracts" element={<Contracts/>} />
      </Routes>
  </section>  
  )
}

export default AuthorizedApp;