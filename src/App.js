
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Buyer from './Pages/Buyer'
import InfoPenawaran from './Pages/InfoPenawaran';
import Seller from './Pages/Seller'

const App = ()  => {

  return (
     <Routes>
       <Route path ="/buyer/:id" element={<Buyer/>}/>
       <Route path ="/infopenawaran/:id" element={<InfoPenawaran/>}/>
       <Route path ="/seller/:id" element={<Seller/>}/>
     </Routes>
  );
}

export default App;
