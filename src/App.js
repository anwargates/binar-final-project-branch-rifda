
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Buyer from './Pages/Buyer'
import InfoPenawaran from './Pages/InfoPenawaran';
import Seller from './Pages/Seller'
import Login from './Pages/Login/Login'
import InfoProduk from './Pages/InfoProduk/InfoProduk'

const App = ()  => {

  return (
     <Routes>
      <Route path="/" element={<Login />}></Route>
       <Route path ="/buyer/:id" element={<Buyer/>}/>
       <Route path ="/infopenawaran/:id" element={<InfoPenawaran/>}/>
       <Route path ="/seller/:id" element={<Seller/>}/>
       <Route path="/infoProduk" element={<InfoProduk />}></Route>
     </Routes>
  );
}

export default App;
